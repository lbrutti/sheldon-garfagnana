import {Component, computed, input} from '@angular/core';

/**
 * Generic hover tooltip.
 *
 * Same look as `sheldon-chart-tooltip` (fixed black box positioned at viewport
 * coordinates) but meant for longer copy: the text is rendered on multiple
 * lines — one block per `\n` (or per array entry) — and each line wraps instead
 * of being clipped on a single row.
 */
@Component({
  selector: 'sheldon-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
})
export default class TooltipComponent {
  /** Tooltip copy: a single string (split on newlines) or an explicit list of lines. */
  text = input<string | string[]>('');

  /** Optional bold heading rendered above the text. */
  title = input<string>('');

  /** Whether the tooltip is shown. */
  visible = input<boolean>(false);

  /** Anchor position in viewport coordinates (e.g. MouseEvent.clientX/clientY). */
  x = input<number>(0);
  y = input<number>(0);

  /** Pixel offset of the tooltip from the anchor. */
  offsetX = input<number>(0);
  offsetY = input<number>(8);

  /** Max width of the box; callers use it to keep the tooltip inside the viewport. */
  maxWidth = input<number>(320);

  protected readonly lines = computed<string[]>(() => {
    const value = this.text();
    return (Array.isArray(value) ? value : value.split('\n'))
      .map(line => line.trim())
      .filter(line => !!line);
  });

  protected readonly hasContent = computed<boolean>(() => !!this.title() || !!this.lines().length);
}
