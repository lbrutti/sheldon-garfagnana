import {Component, input} from '@angular/core';

@Component({
  selector: 'sheldon-chart-label',
  templateUrl: './chart-label.component.html',
  styleUrl: './chart-label.component.scss',
})
export default class ChartLabelComponent {
  text = input<string>('');
  sub = input<string>('');
}
