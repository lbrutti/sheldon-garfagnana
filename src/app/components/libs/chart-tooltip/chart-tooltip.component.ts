import {Component, computed, input} from '@angular/core';
import ChartTwoLinesLabelComponent from '../chart-two-lines-label/chart-two-lines-label.component';

/**
 * Reusable hover tooltip for chart widgets.
 *
 * Renders the same two-lines label (title + subtitle) used inside the charts,
 * optionally followed by one or more extra info lines. It positions itself at
 * viewport coordinates (clientX/clientY) so callers just forward the mouse
 * position; set `visible` to toggle it.
 */
@Component({
  selector: 'sheldon-chart-tooltip',
  imports: [ChartTwoLinesLabelComponent],
  templateUrl: './chart-tooltip.component.html',
  styleUrl: './chart-tooltip.component.scss',
})
export default class ChartTooltipComponent {
  /** Main label (first line). */
  text = input<string>('');
  /** Subtitle (second line). */
  sub = input<string>('');
  /** Optional extra info: a single string or a list of lines. */
  info = input<string | string[]>('');

  /** Whether the tooltip is shown. */
  visible = input<boolean>(false);

  /** Pointer position in viewport coordinates (e.g. MouseEvent.clientX/clientY). */
  x = input<number>(0);
  y = input<number>(0);

  /** Pixel offset of the tooltip from the pointer. */
  offsetX = input<number>(12);
  offsetY = input<number>(12);

  protected readonly infoLines = computed<string[]>(() => {
    const value = this.info();
    return (Array.isArray(value) ? value : [value]).filter(line => !!line);
  });
}
