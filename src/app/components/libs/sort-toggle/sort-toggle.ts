import {Component, Input, input, output} from '@angular/core';
import {MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'sheldon-sort-toggle',
  imports: [
    MatButtonToggleGroup,
    MatIcon,
    MatButtonToggle
  ],
  templateUrl: './sort-toggle.html',
  styleUrl: './sort-toggle.scss',
})
export class SortToggle {
  defaultSortDirection = input<string>('asc');
  sortChange = output<MatButtonToggleChange>();

  onSortChange(event: MatButtonToggleChange): void {
    this.sortChange.emit(event);
  }
}
