import {Component, computed, input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {InterventoInterface} from '../../../interfaces';
import NoDataComponent from '../no-data/no-data.component';

/** Maps a line count to one of the shared *-lines-ellipsed utility classes (src/theme/sheldon-base.scss). */
const ELLIPSIS_CLASS_BY_LINES: Record<number, string> = {
  1: 'one-line-ellipsed',
  2: 'two-lines-ellipsed',
  5: 'five-lines-ellipsed',
  6: 'six-lines-ellipsed',
  7: 'seven-lines-ellipsed',
  8: 'eight-lines-ellipsed',
  12: 'twelve-lines-ellipsed',
  20: 'twenty-lines-ellipsed',
};

@Component({
  selector: 'sheldon-map-tooltip',
  imports: [MatIcon, RouterLink, NoDataComponent],
  templateUrl: './map-tooltip.component.html',
  styleUrl: './map-tooltip.component.scss',
})
export default class MapTooltipComponent {
  intervento = input.required<Partial<InterventoInterface>>();
  color = input<string>('#000');
  showNoData = input<boolean>(true);
  protected readonly hasData = computed(() => !!this.intervento()?.nome);

  /**
   * Number of lines to clamp the "descrizione" text to, using the existing
   * N-lines-ellipsed utility classes. Pass null to show the full, unclamped text.
   */
  ellipsisLines = input<number | null>(12);

  /** Whether to show the "Scopri il progetto" link to the intervento detail page. */
  showLink = input<boolean>(true);

  protected readonly formatter = new Intl.NumberFormat(navigator.language);

  protected descrizioneEllipsisClass = computed(() => {
    const lines = this.ellipsisLines();
    return lines ? (ELLIPSIS_CLASS_BY_LINES[lines] ?? '') : '';
  });
}
