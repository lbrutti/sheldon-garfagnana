import {
  afterNextRender,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {normalizzaStringa, shuffleArray} from '../../../utils';

const PRELOADER_KEYFRAMES = [
  {time: 0, yellow: 0, purple: 0},
  {time: 0.2, yellow: 0, purple: 1},
  {time: 0.4, yellow: 1, purple: 1},
  {time: 0.6, yellow: 1, purple: 0},
  {time: 0.8, yellow: 0, purple: 0},
  {time: 1, yellow: 0, purple: 0},
] as const;

const PRELOADER_DURATION_MS = 2400;

@Component({
  selector: 'sheldon-fullscreen-loader',
  standalone: true,
  templateUrl: './fullscreen-loader.component.html',
  styleUrl: './fullscreen-loader.component.scss',
})
export default class FullscreenLoaderComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly visible = input<boolean>(false);

  private readonly yellowStop = viewChild<ElementRef<SVGStopElement>>('yellowStop');
  private readonly purpleStop = viewChild<ElementRef<SVGStopElement>>('purpleStop');

  protected readonly gradientStyle = signal<string>('');

  constructor() {
    const apiService = inject(ProjectsApiService);
    afterNextRender(() => this.startGradientAnimation());
    effect(() => {
      const cats = apiService.categorie();
      if (!cats.length || this.gradientStyle()) return;
      const cat = normalizzaStringa(shuffleArray(cats)[0].nome);
      this.gradientStyle.set(
        `linear-gradient(135deg, var(--color-gradient-${cat}-start), var(--color-gradient-${cat}-end))`,
      );
    });
  }

  private startGradientAnimation(): void {
    const yellow = this.yellowStop()?.nativeElement;
    const purple = this.purpleStop()?.nativeElement;
    if (!yellow || !purple) return;

    let startTime: number | null = null;
    let frameId = 0;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = ((time - startTime) % PRELOADER_DURATION_MS) / PRELOADER_DURATION_MS;
      const {yellow: yellowOffset, purple: purpleOffset} = this.sampleOffsets(progress);

      yellow.setAttribute('offset', String(yellowOffset));
      purple.setAttribute('offset', String(purpleOffset));
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    this.destroyRef.onDestroy(() => cancelAnimationFrame(frameId));
  }

  private sampleOffsets(progress: number): {yellow: number; purple: number} {
    for (let i = 0; i < PRELOADER_KEYFRAMES.length - 1; i++) {
      const current = PRELOADER_KEYFRAMES[i];
      const next = PRELOADER_KEYFRAMES[i + 1];

      if (progress >= current.time && progress <= next.time) {
        const t = this.easeInOut((progress - current.time) / (next.time - current.time));
        return {
          yellow: current.yellow + (next.yellow - current.yellow) * t,
          purple: current.purple + (next.purple - current.purple) * t,
        };
      }
    }

    return PRELOADER_KEYFRAMES[0];
  }

  private easeInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }
}
