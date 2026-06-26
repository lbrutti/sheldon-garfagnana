import {Component, computed, effect, inject, signal, Signal, untracked, WritableSignal} from '@angular/core';

import {ProjectsApiService} from '../../../services/projects-api.service';
import {TranslocoModule} from '@jsverse/transloco';
import {ActivatedRoute} from '@angular/router';
import DataStoryInterface from '../../../interfaces/data-story.interface';
import {DataInterface, InterventoInterface, TreemapDataInterface} from '../../../interfaces';
import {normalizzaStringa} from '../../../utils';
import {
  InterventoToDataMapping,
  InterventoToTreeDataMapping,
  parseInterventiToDataCollection,
  parseInterventiToTreeDataCollection,
} from '../../../adapters';
import {getExplodedData} from '../../../utils';
import {components} from '../../libs';
import {DecimalPipe, JsonPipe} from '@angular/common';
import camelcase from 'camelcase';
import {FeatureCollection, Polygon} from 'geojson';

@Component({
  selector: 'sheldon-story',
  imports: [...components, TranslocoModule, JsonPipe],
  templateUrl: './data-story.html',
  styleUrl: './data-story.scss',
  providers: [DecimalPipe],
})
export default class DataStory {
  private route = inject(ActivatedRoute);

  protected storyId: string = '';
  protected story = computed<DataStoryInterface>(() => {
    return this.apiService.dataStoriesList().find(ds => ds.id === this.storyId);
  });

  protected interventi = computed<InterventoInterface[]>(() => {
    if (!this.story()) return [];
    const categoria = this.story().categoria;
    return this.apiService.interventi().filter(i => normalizzaStringa(i.categoria) === normalizzaStringa(categoria));
  });

  protected datiIstat = computed<DataInterface[]>(() => {
    if (!this.story()) return [];
    return this.apiService.getDataForStory(this.story().id);
  });

  protected interventiSettings = computed(() =>
    this.apiService.storyInterventiSettings(),
  );
  protected istatSettings = computed(() =>
    this.apiService.storyIstatSettings().filter(setting=>setting.storia===this.story().id),
  );

  // ── interventi data signals (middle lane) ─────────────────────────────
  protected interventiPerComune = signal<DataInterface[]>([]);
  protected comuniConInterventi = signal<DataInterface[]>([]);
  protected interventiPerFine = signal<DataInterface[]>([]);
  protected interventiPerInizio = signal<DataInterface[]>([]);
  protected interventiPerCategoria = signal<TreemapDataInterface[]>([]);
  protected interventiPerTarget = signal<TreemapDataInterface[]>([]);
  protected interventiPerTema = signal<TreemapDataInterface[]>([]);
  protected interventiPerTipologia = signal<TreemapDataInterface[]>([]);
  protected interventiPerFonte = signal<DataInterface[]>([]);
  protected interventiPerPartecipazione = signal<DataInterface[]>([]);
  protected interventiPerStato = signal<DataInterface[]>([]);
  protected interventiPerUnione = signal<DataInterface[]>([]);
  protected comuniPolygons: Signal<FeatureCollection<Polygon>> = signal<FeatureCollection<Polygon>>({
    type: 'FeatureCollection',
    features: [],
  });
  protected featureComuni = signal<FeatureCollection<Polygon>>({type: 'FeatureCollection', features: []});

  private interventiDataSignals: Record<string, WritableSignal<any>> = {
    interventiPerComune: this.interventiPerComune,
    comuniConInterventi: this.comuniConInterventi,
    interventiPerFine: this.interventiPerFine,
    interventiPerInizio: this.interventiPerInizio,
    interventiPerCategoria: this.interventiPerCategoria,
    interventiPerTarget: this.interventiPerTarget,
    interventiPerTema: this.interventiPerTema,
    interventiPerTipologia: this.interventiPerTipologia,
    interventiPerFonte: this.interventiPerFonte,
    interventiPerPartecipazione: this.interventiPerPartecipazione,
    interventiPerStato: this.interventiPerStato,
    interventiPerUnione: this.interventiPerUnione,
    featureComuni: this.featureComuni,
  };

  protected interventiDataMap = computed<Record<string, unknown>>(() => ({
    interventiPerComune: this.interventiPerComune(),
    comuniConInterventi: this.comuniConInterventi(),
    interventiPerFine: this.interventiPerFine(),
    interventiPerInizio: this.interventiPerInizio(),
    interventiPerCategoria: this.interventiPerCategoria(),
    interventiPerTarget: this.interventiPerTarget(),
    interventiPerTema: this.interventiPerTema(),
    interventiPerTipologia: this.interventiPerTipologia(),
    interventiPerFonte: this.interventiPerFonte(),
    interventiPerPartecipazione: this.interventiPerPartecipazione(),
    interventiPerStato: this.interventiPerStato(),
    interventiPerUnione: this.interventiPerUnione(),
    comuniPolygons: this.comuniPolygons(),
    featureComuni: this.featureComuni(),
  }));

  // ── istat data map (right lane) ───────────────────────────────────────
  protected istatDataMap = computed<Record<string, unknown>>(() => ({
    datiIstat: this.datiIstat(),
    variazione_popolazione_residente_per_area_2001_2025: this.datiIstat(),
  }));

  constructor(protected apiService: ProjectsApiService) {
    this.route.params.subscribe(params => {
      this.storyId = params['id'];
    });

    effect(() => {
      if (!this.story()) return;
      this.apiService.getDatiIstat(this.story().id, this.story().gid);
    });

    effect(() => {
      const interventi = this.interventi();
      const config = this.apiService.storyParsingConfig();
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
          const sig = this.interventiDataSignals[entry.key];
          if (!sig) continue;

          switch (entry.type) {
            case 'standard': {
              const source = entry.explodeOn ? getExploded(entry.explodeOn) : interventi;
              sig.set(parseInterventiToDataCollection(source, entry.mapping as InterventoToDataMapping));
              break;
            }
            case 'treemap': {
              const source = getExploded(entry.explodeOn);
              sig.set(parseInterventiToTreeDataCollection(source, entry.mapping as InterventoToTreeDataMapping));
              break;
            }
            case 'uniqueComuni': {
              sig.set(
                Array.from(new Set(interventi.map(i => i.comune))).map(
                  (comune): DataInterface => ({comune, valore: 1, anno: 0, unione: '_'}),
                ),
              );
              break;
            }
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
                const totale = (Object.values(comuniMap.get(f.properties.name) ?? {}) as number[]).reduce(
                  (a: number, b: number) => a + b,
                  0,
                );
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
    this.apiService.getDataStoriesList();
    this.apiService.getInterventi();
    this.apiService.getStoryInterventiSettings();
    this.apiService.getStoryIstatSettings();
    this.apiService.getStoryParsingConfig();
    this.apiService.getComuniPolygons();
    this.comuniPolygons = this.apiService.comuniPolygons;
  }
}
