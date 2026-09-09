import {
  Component,
  input,
} from '@angular/core';
import CardComponent from '../card/card.component';
import {TranslocoModule} from '@jsverse/transloco';
import {SheldonLinkButton} from '../sheldon-link-button/sheldon-link-button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'sheldon-descrizione',
  imports: [CardComponent, TranslocoModule, SheldonLinkButton, SheldonLinkButton, NgClass],
  templateUrl: './card-descrizione.component.html',
  styleUrl: './card-descrizione.component.scss',
})
export default class CardDescrizioneComponent {

  title = input<string>('Dettaglio intervento');
  description = input<string>('');
  url = input<string>('/');
  data = input<any>({});

}
