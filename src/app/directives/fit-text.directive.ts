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

    this.resizeObserver = new ResizeObserver(() => this.fit());
    if (el.parentElement) this.resizeObserver.observe(el.parentElement);

    // Re-fit whenever text content changes (e.g. animated counter ticking)
    this.mutationObserver = new MutationObserver(() => this.fit());
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

    const parentWidth = el.parentElement?.getBoundingClientRect().width ?? 0;

    if (!parentWidth) return;

    // First pass: rough estimate based on character count
    let fontSize = parentWidth / text.length;
    el.style.fontSize = `${fontSize}px`;

    // Second pass: correct using actual rendered width
    const currentWidth = el.getBoundingClientRect().width;
    if (currentWidth > 0) {
      fontSize = fontSize / (currentWidth / parentWidth);
    }

    // Clamp to parent height so text never overflows vertically
    const parentHeight = el.parentElement?.getBoundingClientRect().height ?? 0;
    if (parentHeight > 0) {
      fontSize = Math.min(fontSize, parentHeight);
    }

    el.style.fontSize = `${fontSize < this.minFontSize() ? this.minFontSize() : fontSize}px`;
  }
}
