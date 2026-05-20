import {Component, computed, effect, OnInit, signal, Signal, untracked} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {DataInterface, FilterOptionInterface, InterventoInterface} from '../../../interfaces';
import {components} from '../../libs';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {parseInterventiToDataCollection,} from '../../../adapters';

@Component({
  selector: 'sheldon-dashboard',
  imports: [...components, MatGridList, MatGridTile],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  protected interventi: Signal<InterventoInterface[]> = signal([]);
  protected filters = signal<(string | FilterOptionInterface)[]>([]);
  interventiFiltrati = computed(() => {
    return this.interventi().filter((project: InterventoInterface) => {
      return this.filters().length === 0 || this.filters().some((f: string | FilterOptionInterface) => {
        return (project as any)[(f as FilterOptionInterface).key].indexOf((f as FilterOptionInterface).value) >= 0;
      })
    });
  });

  progettiPerComune = signal<DataInterface[]>([]);

  constructor(protected apiService: ProjectsApiService) {
    effect(() => {
      const interventiAsData: DataInterface[] = parseInterventiToDataCollection(this.interventiFiltrati(), {
        comune: 'nomeComune',
        importoTotale: 'valore',
        inizio: 'anno',
        unione: 'unione',
      });
      untracked(() => {
        this.progettiPerComune.set(interventiAsData);
      });
    });
  }


  ngOnInit(): void {
    this.apiService.getInterventi();
    this.interventi = this.apiService.interventi;
  }

  protected applyFilters($event: (string | FilterOptionInterface)[]) {
    this.filters.set($event);
  }

}
