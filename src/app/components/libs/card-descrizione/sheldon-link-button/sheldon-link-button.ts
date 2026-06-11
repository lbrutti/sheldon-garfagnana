import {Component, input} from '@angular/core';
import {TranslocoPipe} from '@jsverse/transloco';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'sheldon-link-button',
  imports: [
    TranslocoPipe,
    MatButton
  ],
  templateUrl: './sheldon-link-button.html',
  styleUrl: './sheldon-link-button.scss',
})
export class SheldonLinkButton {
  data = input<any>({});
  url = input<string>('');
}
