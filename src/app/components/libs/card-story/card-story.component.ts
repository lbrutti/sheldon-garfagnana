import {
  Component,
  input,
} from '@angular/core';
import CardComponent from '../card/card.component';

import {TranslocoModule} from '@jsverse/transloco';
import DataStoryInterface from '../../../interfaces/data-story.interface';
import {SheldonLinkButton} from '../sheldon-link-button/sheldon-link-button';

@Component({
  selector: 'sheldon-story',
  imports: [CardComponent, TranslocoModule, SheldonLinkButton, SheldonLinkButton],
  templateUrl: './card-story.component.html',
  styleUrl: './card-story.component.scss',
})
export default class CardStoryComponent {
  data = input<DataStoryInterface | null>();
}
