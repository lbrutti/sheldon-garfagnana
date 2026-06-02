import {Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Pipe({
  name: 'multiples',
  standalone: true,

})
export class MultiplesPipe implements PipeTransform {

  constructor(private readonly decimalPipe: DecimalPipe) {
  }

  transform(
    value: number | null,
  ): string {

    if (value == null) {
      return '-';
    }
    if (value > 1000000) {
      return `${this.decimalPipe.transform(value / 1000000, '1.0-0')}M`;
    }
    if (value > 1000) {
      return `${this.decimalPipe.transform(value / 1000, '1.0-0')}K`;
    }
    return `${this.decimalPipe.transform(value, '1.0-0')}`;

  }
}
