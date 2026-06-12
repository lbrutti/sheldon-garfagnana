import {
  Component,
  computed,
  effect,
  QueryList,
  Signal,
  signal, untracked,
  ViewChild,
  ViewChildren,
  WritableSignal
} from '@angular/core';
import {TranslocoModule} from '@jsverse/transloco';
import {NgxMasonryComponent, NgxMasonryDirective, NgxMasonryModule, NgxMasonryOptions} from 'ngx-masonry';
import WidgetSetting from '../../../interfaces/widget-setting.interface';
import { FilterOptionInterface, InterventoInterface} from '../../../interfaces';
import {FeatureCollection, Polygon} from 'geojson';
import {ProjectsApiService} from '../../../services/projects-api.service';
import {getExplodedData, shuffleArray} from '../../../utils';
import camelcase from 'camelcase';
import GlobalSearchComponent from '../../libs/global-search/global-search.component';
import SheldonInterventiMapComponent from '../../libs/sheldon-interventi-map/sheldon-interventi-map.component';

@Component({
  selector: 'sheldon-map-view',
  imports: [TranslocoModule, GlobalSearchComponent, NgxMasonryModule, SheldonInterventiMapComponent],
  templateUrl: './map-view.html',
  styleUrl: './map-view.scss',
})
export default class MapView {

  @ViewChild(NgxMasonryComponent) private masonry!: NgxMasonryComponent;
  @ViewChildren(NgxMasonryDirective) private masonryItems!: QueryList<NgxMasonryDirective>;


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

  protected settings = signal<WidgetSetting[]>([]);
  protected interventi: Signal<InterventoInterface[]> = signal([]);
  protected filters = signal<(FilterOptionInterface)[]>([]);

  protected comuniPolygons: Signal<FeatureCollection<Polygon>> = signal<FeatureCollection<Polygon>>({
    type: "FeatureCollection",
    features: []
  });
  protected categoriaCorrente = computed<string>(() => {
    const cat = this.filters().find(f => f.key === 'categoria')?.value ?? '';
    return cat;
  });
  featureComuni = signal<FeatureCollection<Polygon>>({type: "FeatureCollection", features: []});

  getCategoriaRandom(index: number): string {

    return this.categorieInterventi[index % this.categorieInterventi.length];
  }

  interventiFiltrati = computed(() => {
    return this.interventi().filter((intervento: InterventoInterface) => {
      if (this.filters().length === 0) {
        return true;
      }
      const filtroUnione = this.filters().find(f => (f.key === 'unione' && f.value));
      const matchUnione = filtroUnione ? intervento.unione === filtroUnione.value : true;
      const altriFiltri = this.filters().filter(f => f.key && f.key !== 'unione');
      const matchAltriFiltri = altriFiltri.length ? altriFiltri.some((f: FilterOptionInterface) => {
        return (intervento as any)[(f as FilterOptionInterface).key].indexOf((f as FilterOptionInterface).value) >= 0;
      }) : true;
      return matchUnione && matchAltriFiltri
    });
  });


  protected dataMap = computed<Record<string, unknown>>(() => ({
    featureComuni: this.featureComuni(),
  }));

  categorieInterventi = ['ambiente', 'cultura', 'mobilità', 'sicurezza', 'sociale'];

  private dataSignals: Record<string, WritableSignal<any>> = {
    featureComuni: this.featureComuni,
  };

  constructor(protected apiService: ProjectsApiService) {
    this.categorieInterventi = shuffleArray(this.categorieInterventi);

    effect(() => {
      const raw = this.apiService.mapInterventiSettings();
      if (!raw.length) return;
      untracked(() => {
        // this.settings.set(shuffleArray([...raw]).sort((a, b) => a.tileWidth - b.tileWidth));
        this.settings.set([...raw]);
      });
    });

    effect(() => {
      const interventi = this.interventiFiltrati();
      const config = this.apiService.mapInterventiParsingConfig();
      if (!config) return;

      untracked(() => {
        const explodedCache = new Map<string, InterventoInterface[]>();
        const getExploded = (field: string): InterventoInterface[] => {
          if (!explodedCache.has(field)) {
            explodedCache.set(field, getExplodedData(interventi, field));
          }
          return explodedCache.get(field)!;
        };

        for (const entry of config.datasets) {
          const sig = this.dataSignals[entry.key];
          if (!sig) continue;

          switch (entry.type) {
            case 'mapMerge': {
              const exploded = getExploded(entry.explodeOn);
              const comuniMap = new Map<string, Record<string, number>>();
              exploded.forEach(i => {
                if (!comuniMap.has(i.comune)) comuniMap.set(i.comune, {});
                const counts = comuniMap.get(i.comune)!;
                const key = camelcase((i as any)[entry.groupByField]);
                counts[key] = (counts[key] ?? 0) + 1;
              });
              const updatedFeats = JSON.parse(JSON.stringify(this.comuniPolygons())).features.map((f: any) => {
                const totale = (Object.values(comuniMap.get(f.properties.name) ?? {}) as number[])
                  .reduce((a: number, b: number) => a + b, 0);
                f.properties = {...f.properties, ...comuniMap.get(f.properties.name), totale};
                return f;
              });
              sig.set({type: 'FeatureCollection', features: updatedFeats});
              break;
            }
          }
        }
      });
    });
  }


  ngOnInit(): void {
    this.apiService.getMapInterventiSettings();
    this.apiService.getMapInterventiParsingConfig();
    this.apiService.getInterventi();
    this.apiService.getComuniPolygons();
    this.interventi = this.apiService.interventi;
    this.comuniPolygons = this.apiService.comuniPolygons;
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

  protected applyFilters($event: FilterOptionInterface[]) {
    this.filters.set($event);
  }

}
