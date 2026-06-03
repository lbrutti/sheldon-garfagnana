import {
  Component,
  computed,
  effect,
  OnInit,
  signal,
  Signal,
  untracked,
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
export default class Dashboard implements OnInit {

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

  constructor(protected apiService: ProjectsApiService) {
    this.categorieInterventi = shuffleArray(this.categorieInterventi);

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

        const interventiDemuxPerPartecipazione: InterventoInterface[] = getExplodedData(interventi, 'partecipazione');
        const dataInterventiPerPartecipazione = parseInterventiToDataCollection(interventiDemuxPerPartecipazione, {
          comune: 'comune',
          partecipazione: 'valore',
          inizio: 'anno',
          unione: 'unione',
          nome: 'nome'
        });
        const interventiDemuxPerStato: InterventoInterface[] = getExplodedData(interventi, 'stato');
        const dataInterventiPerStato = parseInterventiToDataCollection(interventiDemuxPerStato, {
          comune: 'comune',
          stato: 'nome',
          importoTotale: 'valore',
          inizio: 'anno',
          unione: 'unione',
        });
        const interventionDemuxPerUnione: InterventoInterface[] = getExplodedData(interventi, 'unione');
        const dataInterventiPerUnione = parseInterventiToDataCollection(interventionDemuxPerUnione, {
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

        //random per dettagli

        const interventiGarfagnana = shuffleArray(
          this.interventiFiltrati().filter((i: InterventoInterface) => i.unione === 'Garfagnana')
        )[0];
        const interventiLunigiana = shuffleArray(
          this.interventiFiltrati().filter((i: InterventoInterface) => i.unione === 'Lunigiana')
        )[0];
        const interventiSerchio = shuffleArray(
          this.interventiFiltrati().filter((i: InterventoInterface) => i.unione === 'Media Valle del Serchio')
        )[0];
        const interventiPistoiese = shuffleArray(
          this.interventiFiltrati().filter((i: InterventoInterface) => i.unione === 'Appennino Pistoiese')
        )[0];
        this.interventoRandomGarfagnana.set(interventiGarfagnana);
        this.interventoRandomLunigiana.set(interventiLunigiana);
        this.interventoRandomSerchio.set(interventiSerchio);
        this.interventoRandomPistoiese.set(interventiPistoiese);

        //per mappa: merge interventi con dataset poligoni comuni
        const comuniMap = new Map();
        interventiDemuxPerStato.map(i => {
          if (!comuniMap.has(i.comune)) {
            comuniMap.set(i.comune, {});
          }
          const counterStati = comuniMap.get(i.comune);

          if (!counterStati[i.stato]) {
            counterStati[i.stato] = 1;
          } else {
            counterStati[i.stato]++;
            comuniMap.set(i.comune, counterStati)
          }
        });
        const updatedFeats = JSON.parse(JSON.stringify(this.comuniPolygons())).features.map((f: any) => {
          f.properties = {...f.properties, ...comuniMap.get((f.properties as any).name)};
          return f;
        });

        this.featureComuni.set({type: "FeatureCollection", features: updatedFeats});
      });
    });
  }


  ngOnInit(): void {
    fetch('settings/dashboardSettings.json')
      .then(r => r.json())
      //random tiles
      .then((s: WidgetSetting[]) => this.settings.set(shuffleArray(s)));
    this.apiService.getInterventi();
    this.apiService.getComuniPolygons();
    this.interventi = this.apiService.interventi;
    this.comuniPolygons = this.apiService.comuniPolygons;
    //merge interventi e comuni per conteggio
    //ordine definito nei settaggi
    // .then((s: WidgetSetting[]) => this.settings.set(s));
  }

  protected applyFilters($event: FilterOptionInterface[]) {
    this.filters.set($event);
  }

}
