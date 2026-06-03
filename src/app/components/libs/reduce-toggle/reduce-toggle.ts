import { Component, input, output } from '@angular/core';
import { MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup } from '@angular/material/button-toggle';
import ReduceByDeclaration from '../../../interfaces/reduce-by-declaration.interface';

@Component({
  selector: 'sheldon-reduce-toggle',
  imports: [MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './reduce-toggle.html',
  styleUrl: './reduce-toggle.scss',
})
export default class ReduceToggleComponent {
  options = input<ReduceByDeclaration[]>([]);
  reduceChange = output<MatButtonToggleChange>();

  onToggleChange(event: MatButtonToggleChange): void {
    this.reduceChange.emit(event);
  }
}
