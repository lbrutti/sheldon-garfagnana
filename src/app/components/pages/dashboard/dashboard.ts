import {Component, computed, effect, inject, OnInit, signal, Signal, untracked} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {DataInterface, FilterOptionInterface, InterventoInterface, TreemapDataInterface} from '../../../interfaces';
import {components} from '../../libs';
import {parseInterventiToDataCollection, parseInterventiToTreeDataCollection,} from '../../../adapters';
import {getExplodedData} from '../../../utils';
import {FeatureCollection, Point, Polygon} from 'geojson';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {BreakpointObserver} from '@angular/cdk/layout';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';

@Component({
  selector: 'sheldon-dashboard',
  imports: [...components, MatGridList, MatGridTile,],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  protected gridCols = toSignal(
    this.breakpointObserver
      .observe(['(max-width: 599px)', '(max-width: 959px)'])
      .pipe(
        map(() => {
          if (this.breakpointObserver.isMatched('(max-width: 599px)')) return 1;
          if (this.breakpointObserver.isMatched('(max-width: 959px)')) return 2;
          return 4;
        })
      ),
    {initialValue: 4}
  );

  protected interventi: Signal<InterventoInterface[]> = signal([]);
  protected filters = signal<(FilterOptionInterface)[]>([]);
  protected comuniPoints: Signal<FeatureCollection<Point>> = signal<FeatureCollection<Point>>({
    type: "FeatureCollection",
    features: []
  });
  protected comuniPolygons: Signal<FeatureCollection<Polygon>> = signal<FeatureCollection<Polygon>>({
    type: "FeatureCollection",
    features: []
  });


  interventiFiltrati = computed(() => {
    return this.interventi().filter((intervento: InterventoInterface) => {
      if (this.filters().length === 0) {
        return true;
      }
      const filtroUnione = this.filters().find(f => f.key === 'unione');
      const matchUnione = filtroUnione ? intervento.unione === filtroUnione.value : true;
      const altriFiltri = this.filters().filter(f => f.key !== 'unione');
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


  constructor(protected apiService: ProjectsApiService) {
    effect(() => {
      const interventi = this.interventiFiltrati();

      untracked(() => {
        const dataInterventiPerComune: DataInterface[] = parseInterventiToDataCollection(interventi, {
          comune: 'comune',
          importoTotale: 'valore',
          inizio: 'anno',
          unione: 'unione',
          nome: 'nome'
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


  ngOnInit(): void {
    this.apiService.getInterventi();
    this.apiService.getComuniPoints();
    this.apiService.getComuniPolygons();
    this.interventi = this.apiService.interventi;
    this.comuniPoints = this.apiService.comuniPoints;
    this.comuniPolygons = this.apiService.comuniPolygons;
  }

  protected applyFilters($event: FilterOptionInterface[]) {
    this.filters.set($event);
  }

}
