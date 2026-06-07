import {Directive, ElementRef, input, OnDestroy, OnInit} from '@angular/core';

@Directive({
  selector: '[sheldonFitText]',
  standalone: true,
  // host: {
  //   style: 'display: inline-block; white-space: nowrap;',
  // },
})
export class FitTextDirective implements OnInit, OnDestroy {
  private resizeObserver!: ResizeObserver;
  private mutationObserver!: MutationObserver;
  minFontSize = input<number>(10);

  constructor(private el: ElementRef<HTMLElement>) {
  }

  ngOnInit(): void {
    const el = this.el.nativeElement;

    this.resizeObserver = new ResizeObserver(() => requestAnimationFrame(() => this.fit()));
    if (el.parentElement) this.resizeObserver.observe(el.parentElement);

    // Re-fit whenever text content changes (e.g. animated counter ticking)
    this.mutationObserver = new MutationObserver(() => requestAnimationFrame(() => this.fit()));
    this.mutationObserver.observe(el, {childList: true, subtree: true, characterData: true});

    this.fit();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
  }

  private fit(): void {
    const el = this.el.nativeElement;
    const text = el.innerText ?? '';
    if (!text.trim().length) return;

    const parent = el.parentElement;
    if (!parent) return;

    const {width: parentWidth, height: parentHeight} = parent.getBoundingClientRect();
    // Wait for a real box. Fitting against a half-laid-out frame (width but no
    // height yet) would size to width only and overflow vertically.
    if (!parentWidth || !parentHeight) return;

    // Normalise line-height so the box height tracks the font size; an inherited
    // fixed line-height otherwise decouples glyph height from the box.
    el.style.lineHeight = '1';

    // Measure the text's intrinsic single-line size at a fixed reference size.
    // We can't read it off the element itself: as a block-level flex item it is
    // stretched to the full parent width, so its own width always equals the
    // parent and can never reveal that the text is actually narrower. A detached,
    // unconstrained span gives the true extent.
    const referenceFontSize = 100;
    const {width: textWidth, height: textHeight} = this.measureText(referenceFontSize);
    if (textWidth <= 0 || textHeight <= 0) return;

    // Largest font that fits the width, clamped so it also fits the height.
    const fontSize = Math.min(
      referenceFontSize * (parentWidth / textWidth),
      referenceFontSize * (parentHeight / textHeight),
    );

    el.style.fontSize = `${Math.max(fontSize, this.minFontSize())}px`;
  }

  // Measures the element's text on a detached span that copies the relevant font
  // properties, so the result reflects the real glyph extent rather than the
  // stretched flex-item box.
  private measureText(referenceFontSize: number): {width: number; height: number} {
    const el = this.el.nativeElement;
    const cs = getComputedStyle(el);
    const span = document.createElement('span');
    span.textContent = el.innerText;
    span.style.cssText =
      'position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;line-height:1;padding:0;margin:0;border:0;';
    span.style.fontFamily = cs.fontFamily;
    span.style.fontWeight = cs.fontWeight;
    span.style.fontStyle = cs.fontStyle;
    span.style.letterSpacing = cs.letterSpacing;
    span.style.fontSize = `${referenceFontSize}px`;

    document.body.appendChild(span);
    const {width, height} = span.getBoundingClientRect();
    span.remove();
    return {width, height};
  }
}
