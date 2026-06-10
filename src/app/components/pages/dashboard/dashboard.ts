import {
  AfterViewInit,
  Component,
  computed,
  effect,
  OnDestroy,
  OnInit,
  QueryList,
  signal,
  Signal,
  untracked,
  ViewChild,
  ViewChildren,
  WritableSignal,
} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {
  DataInterface,
  FilterOptionInterface,
  InterventoInterface,
  TreemapDataInterface,
} from '../../../interfaces';
import {components} from '../../libs';
import {
  InterventoToDataMapping,
  InterventoToTreeDataMapping,
  parseInterventiToDataCollection,
  parseInterventiToTreeDataCollection,
} from '../../../adapters';
import {getExplodedData, shuffleArray} from '../../../utils';
import {FeatureCollection, Polygon} from 'geojson';
import WidgetSetting from '../../../interfaces/widget-setting.interface';
import {DecimalPipe} from '@angular/common';
import camelcase from 'camelcase';
import {NgxMasonryComponent, NgxMasonryDirective, NgxMasonryModule, NgxMasonryOptions} from 'ngx-masonry';

@Component({
  selector: 'sheldon-dashboard',
  imports: [...components, NgxMasonryModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  providers: [DecimalPipe]
})
export default class Dashboard implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(NgxMasonryComponent) private masonry!: NgxMasonryComponent;
  @ViewChildren(NgxMasonryDirective) private masonryItems!: QueryList<NgxMasonryDirective>;

  protected masonryOptions: NgxMasonryOptions = {
    gutter: 16,
    columnWidth: 96,
    percentPosition: false,
    fitWidth:true,
    animations: {},
  };

  private resizeObserver = new ResizeObserver(() => {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => this.masonry?.layout());
  });
  private rafId?: number;

  protected settings = signal<WidgetSetting[]>([]);
  protected interventi: Signal<InterventoInterface[]> = signal([]);
  protected filters = signal<(FilterOptionInterface)[]>([]);

  protected comuniPolygons: Signal<FeatureCollection<Polygon>> = signal<FeatureCollection<Polygon>>({
    type: "FeatureCollection",
    features: []
  });
  protected categoriaCorrente = computed<string>(() => {
    const cat = this.filters().find(f => f.key === 'categoria')?.value ?? '';
    return cat;
  });
  featureComuni = signal<FeatureCollection<Polygon>>({type: "FeatureCollection", features: []});

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

  interventoRandomGarfagnana = signal<any>({});
  interventoRandomLunigiana = signal<any>({});
  interventoRandomSerchio = signal<any>({});
  interventoRandomPistoiese = signal<any>({});

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
    interventoRandomGarfagnana: this.interventoRandomGarfagnana(),
    interventoRandomLunigiana: this.interventoRandomLunigiana(),
    interventoRandomSerchio: this.interventoRandomSerchio(),
    interventoRandomPistoiese: this.interventoRandomPistoiese(),
    featureComuni: this.featureComuni(),
  }));

  categorieInterventi = ['ambiente', 'cultura', 'mobilità', 'sicurezza', 'sociale'];

  private dataSignals: Record<string, WritableSignal<any>> = {
    interventiPerComune: this.interventiPerComune,
    comuniConInterventi: this.comuniConInterventi,
    interventiPerFine: this.interventiPerFine,
    interventiPerInizio: this.interventiPerInizio,
    interventiPerCategoria: this.interventiPerCategoria,
    interventiPerTarget: this.interventiPerTarget,
    interventiPerTema: this.interventiPerTema,
    interventiPerTipologia: this.interventiPerTipologia,
    interventiPerFonte: this.interventiPerFonte,
    interventiPerPartecipazione: this.interventiPerPartecipazione,
    interventiPerStato: this.interventiPerStato,
    interventiPerUnione: this.interventiPerUnione,
    interventoRandomGarfagnana: this.interventoRandomGarfagnana,
    interventoRandomLunigiana: this.interventoRandomLunigiana,
    interventoRandomSerchio: this.interventoRandomSerchio,
    interventoRandomPistoiese: this.interventoRandomPistoiese,
    featureComuni: this.featureComuni,
  };

  constructor(protected apiService: ProjectsApiService) {
    this.categorieInterventi = shuffleArray(this.categorieInterventi);

    effect(() => {
      const raw = this.apiService.dashboardSettings();
      if (!raw.length) return;
      untracked(() => {
        // this.settings.set(shuffleArray([...raw]).sort((a, b) => a.tileWidth - b.tileWidth));
        this.settings.set([...raw]);
      });
    });

    effect(() => {
      const interventi = this.interventiFiltrati();
      const config = this.apiService.dashboardParsingConfig();
      if (!config) return;

      untracked(() => {
        const explodedCache = new Map<string, InterventoInterface[]>();
        const getExploded = (field: string): InterventoInterface[] => {
          if (!explodedCache.has(field)) {
            explodedCache.set(field, getExplodedData(interventi, field));
          }
          return explodedCache.get(field)!;
        };

        for (const entry of config.datasets) {
          const sig = this.dataSignals[entry.key];
          if (!sig) continue;

          switch (entry.type) {
            case 'standard': {
              const source = entry.explodeOn ? getExploded(entry.explodeOn) : interventi;
              sig.set(parseInterventiToDataCollection(source, entry.mapping as InterventoToDataMapping));
              break;
            }
            case 'treemap': {
              const source = getExploded(entry.explodeOn);
              sig.set(parseInterventiToTreeDataCollection(source, entry.mapping as InterventoToTreeDataMapping));
              break;
            }
            case 'uniqueComuni': {
              sig.set(
                Array.from(new Set(interventi.map(i => i.comune)))
                  .map((comune): DataInterface => ({comune, valore: 1, anno: 0, unione: '_'}))
              );
              break;
            }
            case 'randomByUnion': {
              sig.set(shuffleArray(interventi.filter(i => i.unione === entry.unioneFilter))[0]);
              break;
            }
            case 'mapMerge': {
              const exploded = getExploded(entry.explodeOn);
              const comuniMap = new Map<string, Record<string, number>>();
              exploded.forEach(i => {
                if (!comuniMap.has(i.comune)) comuniMap.set(i.comune, {});
                const counts = comuniMap.get(i.comune)!;
                const key = camelcase((i as any)[entry.groupByField]);
                counts[key] = (counts[key] ?? 0) + 1;
              });
              const updatedFeats = JSON.parse(JSON.stringify(this.comuniPolygons())).features.map((f: any) => {
                const totale = (Object.values(comuniMap.get(f.properties.name) ?? {}) as number[])
                  .reduce((a: number, b: number) => a + b, 0);
                f.properties = {...f.properties, ...comuniMap.get(f.properties.name), totale};
                return f;
              });
              sig.set({type: 'FeatureCollection', features: updatedFeats});
              break;
            }
          }
        }
      });
    });
  }


  ngOnInit(): void {
    this.apiService.getDashboardSettings();
    this.apiService.getDashboardParsingConfig();
    this.apiService.getInterventi();
    this.apiService.getComuniPolygons();
    this.interventi = this.apiService.interventi;
    this.comuniPolygons = this.apiService.comuniPolygons;
  }

  ngAfterViewInit(): void {
    this.masonryItems.changes.subscribe(() => {
      this.resizeObserver.disconnect();
      this.masonryItems.forEach(item =>
        this.resizeObserver.observe(item.element.nativeElement)
      );
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  protected applyFilters($event: FilterOptionInterface[]) {
    this.filters.set($event);
  }

}
