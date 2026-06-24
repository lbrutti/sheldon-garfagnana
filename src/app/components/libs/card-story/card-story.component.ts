import {
  Component, inject,
  input,
} from '@angular/core';
import CardComponent from '../card/card.component';

import {TranslocoModule} from '@jsverse/transloco';
import DataStoryInterface from '../../../interfaces/data-story.interface';
import {SheldonLinkButton} from '../sheldon-link-button/sheldon-link-button';
import {getRandomGradient, normalizzaStringa} from '../../../utils';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'sheldon-story',
  imports: [CardComponent, TranslocoModule, SheldonLinkButton, SheldonLinkButton, RouterLink],
  templateUrl: './card-story.component.html',
  styleUrl: './card-story.component.scss',
})
export default class CardStoryComponent {
  data = input<DataStoryInterface | null>();
  protected readonly getRandomGradient = getRandomGradient;
  private router = inject(Router);
}
