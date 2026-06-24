import {Component, inject} from '@angular/core';

import {ProjectsApiService} from '../../../services/projects-api.service';
import {TranslocoModule} from '@jsverse/transloco';
import {ActivatedRoute} from '@angular/router';
import DataStoryInterface from '../../../interfaces/data-story.interface';

@Component({
  selector: 'sheldon-story',
  imports: [
    TranslocoModule
  ],
  templateUrl: './data-story.html',
  styleUrl: './data-story.scss',
})
export default class DataStory {
  private route = inject(ActivatedRoute);


  constructor(protected apiService: ProjectsApiService) {
    this.route.params.subscribe((params) => {
      const story: DataStoryInterface = params['id'];
      console.log(story);
    });
  }


  ngOnInit(): void {

  }


}
