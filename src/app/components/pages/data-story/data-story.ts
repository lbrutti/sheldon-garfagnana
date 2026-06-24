import {Component, computed, effect, inject} from '@angular/core';

import {ProjectsApiService} from '../../../services/projects-api.service';
import {TranslocoModule} from '@jsverse/transloco';
import {ActivatedRoute} from '@angular/router';
import DataStoryInterface from '../../../interfaces/data-story.interface';
import {DataInterface, InterventoInterface} from '../../../interfaces';
import {normalizzaStringa} from '../../../utils';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'sheldon-story',
  imports: [
    TranslocoModule,
    JsonPipe
  ],
  templateUrl: './data-story.html',
  styleUrl: './data-story.scss',
})
export default class DataStory {
  private route = inject(ActivatedRoute);

  protected storyId: string = '';
  protected story = computed<DataStoryInterface>(() => {
    return this.apiService.dataStoriesList().find(ds => ds.id === this.storyId);
  });

  protected interventi = computed<InterventoInterface[]>(() => {
    if (!this.story()) return [];
    const categoria = this.story().categoria;
    return this.apiService.interventi().filter(i => normalizzaStringa(i.categoria) === normalizzaStringa(categoria));
  });

  protected datiIstat = computed<DataInterface[]>(() => {
    if (!this.story()) return [];
    return this.apiService.getDataForStory(this.story().id);
  });

  constructor(protected apiService: ProjectsApiService) {
    this.route.params.subscribe((params) => {
      this.storyId = params['id'];
    });

    effect(() => {
      if (!this.story()) return;
      this.apiService.getDatiIstat(this.story().id, this.story().gid);
    });
  }


  ngOnInit(): void {
    this.apiService.getDataStoriesList();
    this.apiService.getInterventi();

  }


}
