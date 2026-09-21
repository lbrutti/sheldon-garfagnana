import {Component, input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {TranslocoModule} from '@jsverse/transloco';

@Component({
  selector: 'sheldon-no-data',
  imports: [MatIcon, TranslocoModule],
  templateUrl: './no-data.component.html',
  styleUrl: './no-data.component.scss',
})
export default class NoDataComponent {
  /** Overrides the default localized message. */
  message = input<string>('');
}
