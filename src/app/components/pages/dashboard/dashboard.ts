import {Component, computed, effect, OnInit, signal, Signal, untracked} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
//import GlobalSearchComponent from '../../libs/global-search/global-search.component';
import {DataInterface, FilterOptionInterface, InterventoInterface} from '../../../interfaces';
import ChartHorizontalBarComponent from '../../libs/chart-horizontal-bar/chart-horizontal-bar.component';
import {components} from '../../libs';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {parseInterventiToDataCollection} from '../../../adapters';

@Component({
  selector: 'sheldon-dashboard',
  imports: [ChartHorizontalBarComponent, ...components, MatGridList, MatGridTile],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export default class Dashboard implements OnInit {
  protected interventi: Signal<InterventoInterface[]> = signal([]);
  protected popolazione: Signal<DataInterface[]> = signal([]);
  protected filters = signal<(string | FilterOptionInterface)[]>([]);
  filteredProjects = computed(() => {
    return this.interventi().filter((project: InterventoInterface) => {
      return this.filters().length === 0 || this.filters().every((f: string | FilterOptionInterface) => {
        return (project as any)[(f as FilterOptionInterface).key] === (f as FilterOptionInterface).value;
      })
    });
  });
  popolazioneLastYear = computed(() => {
    const lastYear = Math.max(...this.popolazione().map(p => p.anno));
    return this.popolazione().filter(d => d.anno === lastYear);
  });
  progettiPerComune = signal<DataInterface[]>([]);

  constructor(protected apiService: ProjectsApiService) {
    effect(() => {
      const interventiAsData: DataInterface[] = parseInterventiToDataCollection(this.interventi(), {
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
    this.apiService.getProjects();
    this.apiService.getPopolazione();
    this.interventi = this.apiService.progetti;
    this.popolazione = this.apiService.popolazione;
  }

  protected applyFilters($event: (string | FilterOptionInterface)[]) {
    this.filters.set($event);
  }

}
