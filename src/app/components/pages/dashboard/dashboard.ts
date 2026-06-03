import {
  afterEveryRender,
  Component,
  computed,
  effect,
  ElementRef,
  OnDestroy,
  OnInit,
  signal,
  Signal,
  untracked,
  ViewChild
} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {DataInterface, FilterOptionInterface, InterventoInterface, TreemapDataInterface} from '../../../interfaces';
import {components} from '../../libs';
import {parseInterventiToDataCollection, parseInterventiToTreeDataCollection,} from '../../../adapters';
import {getExplodedData, shuffleArray} from '../../../utils';
import {FeatureCollection, Polygon} from 'geojson';
import WidgetSetting from '../../../interfaces/widget-setting.interface';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'sheldon-dashboard',
  imports: [...components],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [DecimalPipe] // Add DecimalPipe to providers so it can be injected

})
export default class Dashboard implements OnInit, OnDestroy {

  @ViewChild('grid') private gridRef!: ElementRef<HTMLElement>;
  private resizeObserver?: ResizeObserver;
  private readonly MASONRY_ROW_PX = 4;
  private readonly MASONRY_GAP_PX = 16;

  protected settings = signal<WidgetSetting[]>([]);
  protected interventi: Signal<InterventoInterface[]> = signal([]);
  protected filters = signal<(FilterOptionInterface)[]>([]);

  protected comuniPolygons: Signal<FeatureCollection<Polygon>> = signal<FeatureCollection<Polygon>>({
    type: "FeatureCollection",
    features: []
  });
  protected categoriaCorrente = computed<string>(() => {
    return this.filters().find(f => f.key === 'categoria')?.value ?? ''
  });

  getCategoriaRandom(index: number): string {

    return this.categorieInterventi[index % this.categorieInterventi.length];
  }

  interventiFiltrati = computed(() => {
    return this.interventi().filter((intervento: InterventoInterface) => {
      if (this.filters().length === 0) {
        return true;
      }
      const filtroUnione = this.filters().find(f => (f.key === 'unione' && f.value));
      const matchUnione = filtroUnione ? intervento.unione === filtroUnione.value : true;
      const altriFiltri = this.filters().filter(f => f.key && f.key !== 'unione');
      const matchAltriFiltri = altriFiltri.length ? altriFiltri.some((f: FilterOptionInterface) => {
        return (intervento as any)[(f as FilterOptionInterface).key].indexOf((f as FilterOptionInterface).value) >= 0;
      }) : true;
      return matchUnione && matchAltriFiltri
    });
  });

  //kpi, barre
  interventiPerComune = signal<DataInterface[]>([]);
  comuniConInterventi = signal<DataInterface[]>([]);
  interventiPerFine = signal<DataInterface[]>([]);
  interventiPerInizio = signal<DataInterface[]>([]);

  //per treemap
  interventiPerCategoria = signal<TreemapDataInterface[]>([]);
  interventiPerTarget = signal<TreemapDataInterface[]>([]);
  interventiPerTema = signal<TreemapDataInterface[]>([]);
  interventiPerTipologia = signal<TreemapDataInterface[]>([]);

  //per stack
  interventiPerFonte = signal<DataInterface[]>([]);
  interventiPerPartecipazione = signal<DataInterface[]>([]);
  interventiPerStato = signal<DataInterface[]>([]);
  interventiPerUnione = signal<DataInterface[]>([]);

  protected dataMap = computed<Record<string, unknown>>(() => ({
    interventiPerComune: this.interventiPerComune(),
    comuniConInterventi: this.comuniConInterventi(),
    interventiPerFine: this.interventiPerFine(),
    interventiPerInizio: this.interventiPerInizio(),
    interventiPerCategoria: this.interventiPerCategoria(),
    interventiPerTarget: this.interventiPerTarget(),
    interventiPerTema: this.interventiPerTema(),
    interventiPerTipologia: this.interventiPerTipologia(),
    interventiPerFonte: this.interventiPerFonte(),
    interventiPerPartecipazione: this.interventiPerPartecipazione(),
    interventiPerStato: this.interventiPerStato(),
    interventiPerUnione: this.interventiPerUnione(),
    comuniPolygons: this.comuniPolygons(),
  }));

  categorieInterventi = ['ambiente', 'cultura', 'mobilità', 'sicurezza', 'sociale'];

  constructor(protected apiService: ProjectsApiService) {
    this.categorieInterventi = shuffleArray(this.categorieInterventi);

    if (!CSS.supports('grid-template-rows', 'masonry')) {
      afterEveryRender(() => this.gridRef && this.recalculateMasonry());
    }
    effect(() => {
      const interventi = this.interventiFiltrati();

      untracked(() => {
        const dataInterventiPerComune: DataInterface[] = parseInterventiToDataCollection(interventi, {
          comune: 'comune',
          importoTotale: 'valore',
          inizio: 'anno',
          unione: 'unione',
          nome: 'nome',
        });
        const dataComuniConInterventi: DataInterface[] = Array.from(new Set(interventi.map(i => i.comune)))
          .map((comune: string): DataInterface => ({
            comune: comune,
            valore: 1,
            anno: 0,
            unione: '_'
          }));
        const dataPerFine: DataInterface[] = parseInterventiToDataCollection(interventi, {
          comune: 'comune',
          importoTotale: 'valore',
          fine: 'anno',
          unione: 'unione',
        });
        const dataPerInizio: DataInterface[] = parseInterventiToDataCollection(interventi, {
          comune: 'comune',
          importoTotale: 'valore',
          inizio: 'anno',
          unione: 'unione',
        });
        // preprocessing per treemaps
        const interventiDemuxPerCategoria: InterventoInterface[] = getExplodedData(interventi, 'categoria');
        const treeMapInterventiPerCategoria: TreemapDataInterface[] = parseInterventiToTreeDataCollection(
          interventiDemuxPerCategoria, {
            comune: 'comune',
            importoTotale: 'valore',
            inizio: 'anno',
            unione: 'unione',
            gruppi: ['categoria']
          });
        const interventiDemuxPerTarget: InterventoInterface[] = getExplodedData(interventi, 'target');
        const treeMapInterventiPerTarget: TreemapDataInterface[] = parseInterventiToTreeDataCollection(
          interventiDemuxPerTarget, {
            comune: 'comune',
            importoTotale: 'valore',
            inizio: 'anno',
            unione: 'unione',
            gruppi: ['target']
          });
        const interventiDemuxPerTema: InterventoInterface[] = getExplodedData(interventi, 'tema');
        const treeMapInterventiPerTema: TreemapDataInterface[] = parseInterventiToTreeDataCollection(
          interventiDemuxPerTema, {
            comune: 'comune',
            importoTotale: 'valore',
            inizio: 'anno',
            unione: 'unione',
            gruppi: ['tema']
          });
        const interventiDemuxPerTipologia: InterventoInterface[] = getExplodedData(interventi, 'tipologia');
        const treeMapInterventiPerTipologia: TreemapDataInterface[] = parseInterventiToTreeDataCollection(
          interventiDemuxPerTipologia, {
            comune: 'comune',
            importoTotale: 'valore',
            inizio: 'anno',
            unione: 'unione',
            gruppi: ['tipologia']
          });

        //vanno spacchettati per fonte
        const interventiDemuxPerFonte: InterventoInterface[] = getExplodedData(interventi, 'importoFonti');
        const dataInterventiPerFonte: DataInterface[] = parseInterventiToDataCollection(interventiDemuxPerFonte, {
          comune: 'comune',
          importoFonti: 'valore',
          inizio: 'anno',
          unione: 'unione',
          nome: 'nome'
        });

        const iterventiDemuxPerPartecipazione: InterventoInterface[] = getExplodedData(interventi, 'partecipazione');
        const dataInterventiPerPartecipazione = parseInterventiToDataCollection(iterventiDemuxPerPartecipazione, {
          comune: 'comune',
          partecipazione: 'valore',
          inizio: 'anno',
          unione: 'unione',
          nome: 'nome'
        });
        const iterventiDemuxPerStato: InterventoInterface[] = getExplodedData(interventi, 'stato');
        const dataInterventiPerStato = parseInterventiToDataCollection(iterventiDemuxPerStato, {
          comune: 'comune',
          stato: 'nome',
          importoTotale: 'valore',
          inizio: 'anno',
          unione: 'unione',
        });
        const iterventiDemuxPerUnione: InterventoInterface[] = getExplodedData(interventi, 'unione');
        const dataInterventiPerUnione = parseInterventiToDataCollection(iterventiDemuxPerUnione, {
          comune: 'comune',
          unione: 'valore',
          inizio: 'anno',
          nome: 'nome'
        });

        this.interventiPerComune.set(dataInterventiPerComune);
        this.interventiPerFine.set(dataPerFine);
        this.interventiPerInizio.set(dataPerInizio);
        this.comuniConInterventi.set(dataComuniConInterventi);

        //treemaps signals
        this.interventiPerCategoria.set(treeMapInterventiPerCategoria);
        this.interventiPerTarget.set(treeMapInterventiPerTarget);
        this.interventiPerTema.set(treeMapInterventiPerTema);
        this.interventiPerTipologia.set(treeMapInterventiPerTipologia);

        // stacks
        this.interventiPerFonte.set(dataInterventiPerFonte);
        this.interventiPerPartecipazione.set(dataInterventiPerPartecipazione);
        this.interventiPerStato.set(dataInterventiPerStato);
        this.interventiPerUnione.set(dataInterventiPerUnione);
      });
    });
  }


  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }

  private recalculateMasonry(): void {
    const grid = this.gridRef.nativeElement;
    const tiles = Array.from(grid.children) as HTMLElement[];

    tiles.forEach(t => (t.style.gridRowEnd = ''));
    const spans = tiles.map(t => {
      const h = t.getBoundingClientRect().height;
      return h > 0 ? Math.ceil((h + this.MASONRY_GAP_PX) / (this.MASONRY_ROW_PX + this.MASONRY_GAP_PX)) : 0;
    });
    tiles.forEach((t, i) => {
      if (spans[i] > 0) t.style.gridRowEnd = `span ${spans[i]}`;
    });

    this.resizeObserver?.disconnect();
    this.resizeObserver = new ResizeObserver(() => this.recalculateMasonry());
    tiles.forEach(t => this.resizeObserver!.observe(t));
  }

  ngOnInit(): void {
    this.apiService.getInterventi();
    this.apiService.getComuniPolygons();
    this.interventi = this.apiService.interventi;
    this.comuniPolygons = this.apiService.comuniPolygons;
    fetch('settings/dashboardSettings.json')
      .then(r => r.json())
      // .then((s: WidgetSetting[]) => this.settings.set(shuffleArray(s)));
      .then((s: WidgetSetting[]) => this.settings.set(s));
  }

  protected applyFilters($event: FilterOptionInterface[]) {
    this.filters.set($event);
  }

}
