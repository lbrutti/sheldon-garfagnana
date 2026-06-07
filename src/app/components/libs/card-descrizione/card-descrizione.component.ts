import {
  Component,
  input,
} from '@angular/core';
import CardComponent from '../card/card.component';
import {MatButton} from '@angular/material/button';
import {TranslocoModule} from '@jsverse/transloco';

@Component({
  selector: 'sheldon-descrizione',
  imports: [CardComponent, MatButton, TranslocoModule],
  templateUrl: './card-descrizione.component.html',
  styleUrl: './card-descrizione.component.scss',
})
export default class CardDescrizioneComponent {

  title = input<string>('Dettaglio intervento');
  description = input<string>('');
  url = input<string>('/');
  data = input<any>({});

}
