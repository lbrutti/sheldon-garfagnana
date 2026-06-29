import {
  AfterViewInit,
  Component,
  effect,
  OnDestroy,
  OnInit,
  QueryList,
  signal,
  untracked,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {components} from '../../libs';


import {DecimalPipe} from '@angular/common';
import {NgxMasonryComponent, NgxMasonryDirective, NgxMasonryModule, NgxMasonryOptions} from 'ngx-masonry';
import DataStoryInterface from '../../../interfaces/data-story.interface';
import CardStoryComponent from '../../libs/card-story/card-story.component';

@Component({
  selector: 'sheldon-data-stories',
  imports: [...components, NgxMasonryModule, CardStoryComponent],
  templateUrl: './data-stories.html',
  styleUrl: './data-stories.scss',
  providers: [DecimalPipe]
})
export default class DataStories implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(NgxMasonryComponent) private masonry!: NgxMasonryComponent;
  @ViewChildren(NgxMasonryDirective) private masonryItems!: QueryList<NgxMasonryDirective>;

  protected masonryOptions: NgxMasonryOptions = {
    gutter: 16,
    columnWidth: '.grid-sizer',
    percentPosition: false,
    fitWidth: false,
    horizontalOrder: true,
    animations: {},
  };

  protected layoutReady = signal(false);

  private readonly windowResizeListener = () => {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => this.masonry?.layout());
  };

  private resizeObserver = new ResizeObserver(() => {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => this.masonry?.layout());
  });
  private rafId?: number;

  protected onLayoutComplete(): void {
    if (!this.layoutReady()) this.layoutReady.set(true);
  }

  protected stories = signal<DataStoryInterface[]>([]);


  constructor(protected apiService: ProjectsApiService) {

    effect(() => {
      const raw = this.apiService.dataStoriesList();
      if (!raw.length) return;
      untracked(() => {
        // this.settings.set(shuffleArray([...raw]).sort((a, b) => a.tileWidth - b.tileWidth));
        this.stories.set([...raw]);
      });
    });

  }


  ngOnInit(): void {
    this.apiService.getDataStoriesList();
    window.addEventListener('resize', this.windowResizeListener);
  }

  ngAfterViewInit(): void {
    this.masonryItems.changes.subscribe(() => {
      this.resizeObserver.disconnect();
      this.masonryItems.forEach(item =>
        this.resizeObserver.observe(item.element.nativeElement)
      );
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver.disconnect();
    window.removeEventListener('resize', this.windowResizeListener);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

}
