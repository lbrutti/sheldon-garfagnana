import {Component, input, output} from '@angular/core';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'sheldon-popup',
  imports: [TranslocoPipe],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss',
})
export default class PopupComponent {
  readonly title = input.required<string>();
  readonly paragraphs = input<string[]>([]);
  readonly visible = input<boolean>(true);

  readonly prosegui = output<void>();
}
