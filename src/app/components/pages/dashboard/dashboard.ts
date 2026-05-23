import {Component, computed, effect, OnInit, signal, Signal, untracked} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {DataInterface, FilterOptionInterface, InterventoInterface} from '../../../interfaces';
import {components} from '../../libs';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {parseInterventiToDataCollection,} from '../../../adapters';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'sheldon-dashboard',
  imports: [...components, MatGridList, MatGridTile, JsonPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  protected interventi: Signal<InterventoInterface[]> = signal([]);
  protected filters = signal<(FilterOptionInterface)[]>([]);

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

  interventiPerComune = signal<DataInterface[]>([]);
  comuniConInterventi = signal<DataInterface[]>([]);
  interventiPerFine = signal<DataInterface[]>([]);
  interventiPerInizio = signal<DataInterface[]>([]);

  constructor(protected apiService: ProjectsApiService) {
    effect(() => {
      const dataInterventiPerComune: DataInterface[] = parseInterventiToDataCollection(this.interventiFiltrati(), {
        comune: 'comune',
        importoTotale: 'valore',
        inizio: 'anno',
        unione: 'unione',
      });
      const dataComuniConInterventi: DataInterface[] = Array.from(new Set(this.interventiFiltrati().map(i=>i.comune)))
        .map((comune:string):DataInterface=>({
          comune:comune,
          valore:1,
          anno:0,
          unione:'_'
        }));
      const dataPerFine: DataInterface[] = parseInterventiToDataCollection(this.interventiFiltrati(), {
        comune: 'comune',
        importoTotale: 'valore',
        fine: 'anno',
        unione: 'unione',
      });
      const dataPerInizio: DataInterface[] = parseInterventiToDataCollection(this.interventiFiltrati(), {
        comune: 'comune',
        importoTotale: 'valore',
        inizio: 'anno',
        unione: 'unione',
      });
      untracked(() => {
        this.interventiPerComune.set(dataInterventiPerComune);
        this.interventiPerFine.set(dataPerFine);
        this.interventiPerInizio.set(dataPerInizio);
        this.comuniConInterventi.set(dataComuniConInterventi);
      });
    });
  }


  ngOnInit(): void {
    this.apiService.getInterventi();
    this.interventi = this.apiService.interventi;
  }

  protected applyFilters($event: FilterOptionInterface[]) {
    this.filters.set($event);
  }

}
