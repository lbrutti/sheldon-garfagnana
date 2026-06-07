import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'sheldon-public-stories',
  imports: [TranslocoModule],
  templateUrl: './data-stories.html',
  styleUrl: './data-stories.scss',
})
export default class DataStories {}
