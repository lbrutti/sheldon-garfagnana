import {computed, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DashboardParsingConfig, DataInterface, InterventoInterface} from '../interfaces';
import {csvToJson, parseDashboardParsingConfigCsv, parseDashboardSettingsCsv} from '../adapters';
import {FeatureCollection, Polygon} from 'geojson';
import {environment} from '../../environments/environment';
import WidgetSetting, {StoryWidgetSetting} from '../interfaces/widget-setting.interface';
import DataStoryInterface from '../interfaces/data-story.interface';
import {parseDataStoryCsv} from '../adapters/data-story.adapter';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private _interventi: WritableSignal<InterventoInterface[]> = signal<InterventoInterface[]>([]);

  private _comuniPolygons: WritableSignal<FeatureCollection<Polygon>> = signal<FeatureCollection<Polygon>>({
    type: 'FeatureCollection',
    features: []
  });
  private _dashboardSettings: WritableSignal<WidgetSetting[]> = signal<WidgetSetting[]>([]);
  private _dashboardParsingConfig: WritableSignal<DashboardParsingConfig | null> = signal<DashboardParsingConfig | null>(null);
  private _mapInterventiSettings: WritableSignal<WidgetSetting[]> = signal<WidgetSetting[]>([]);
  private _mapInterventiParsingConfig: WritableSignal<DashboardParsingConfig | null> = signal<DashboardParsingConfig | null>(null);
  private _dataStoriesList: WritableSignal<DataStoryInterface[]> = signal<DataStoryInterface[]>([]);
  private _storyInterventiSettings: WritableSignal<WidgetSetting[]> = signal<WidgetSetting[]>([]);
  private _storyIstatSettings: WritableSignal<StoryWidgetSetting[]> = signal<StoryWidgetSetting[]>([]);
  private _storyParsingConfig: WritableSignal<DashboardParsingConfig | null> = signal<DashboardParsingConfig | null>(null);
  private _loadingCount = signal(0);

  private _datiStories: WritableSignal<Record<string, DataInterface[]>> = signal({});
  private _datiIstatByFvid: WritableSignal<Record<string, DataInterface[]>> = signal({});
  private _fetched = new Set<string>();
  readonly loading = computed(() => this._loadingCount() > 0);
  private _unioniNascoste: WritableSignal<{ unione: string }[]> = signal([]);

  constructor(
    protected readonly httpClient: HttpClient,
  ) {
    this.getUnioniNascoste();
  }

  getDatiIstatByFvid(fvid: string, gid: string, query: string = 'SELECT *') {
    const cacheKey = `fvid:${fvid}`;
    if (this._fetched.has(cacheKey)) return;
    const url = this.getGVizURL(environment.dataStoriesSheet.spreadsheetId, gid, query, fvid);
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(url, {responseType: 'text'}).subscribe({
      next: (res: any) => {
        this._datiIstatByFvid.update(m => ({...m, [fvid]: csvToJson(res) as DataInterface[]}));
        this._loadingCount.update(n => n - 1);
        this._fetched.add(cacheKey);
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }


  getInterventi() {
    if (this._fetched.has('interventi')) return;
    const url = this.getGVizURL(environment.sheets.spreadsheetId, environment.sheets.interventiGid, "SELECT *");
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(url, {responseType: 'text'}).subscribe({
      next: (res: any) => {
        this._interventi.set(csvToJson(res) as InterventoInterface[]);
        this._loadingCount.update(n => n - 1);
        this._fetched.add('interventi');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getUnioniNascoste() {
    if (this._fetched.has('unioniNascoste')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.unioniNascosteUrl, {responseType: 'text'}).subscribe({
      next: (res: any) => {
        this._unioniNascoste.set(csvToJson(res) as { unione: string }[]);
        this._loadingCount.update(n => n - 1);
        this._fetched.add('unioniNascoste');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getComuniPolygons() {
    if (this._fetched.has('comuniPolygons')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.data.comuniPolygons, {responseType: 'json'}).subscribe({
      next: (res: any) => {
        this._comuniPolygons.set(res as FeatureCollection<Polygon>);
        this._loadingCount.update(n => n - 1);
        this._fetched.add('comuniPolygons');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getGVizURL(spreadsheetId: string, sheetId: string, query: string = 'SELECT *', fvid?: string): string {
    const fvidParam = fvid ? `&fvid=${fvid}` : '';
    return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&gid=${sheetId}${fvidParam}&tq=${encodeURIComponent(query)}`;
  }

  getFVizURL(spreadsheetUrl: string, sheetId: string, fvid?: string): string {
    const fvidParam = fvid ? `&fvid=${fvid}` : '';
    return `${spreadsheetUrl}&gid=${sheetId}${fvidParam}`;
  }

  getDashboardSettings() {
    if (this._fetched.has('dashboardSettings')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.dashboardSettingsUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._dashboardSettings.set(parseDashboardSettingsCsv(csv));
        this._loadingCount.update(n => n - 1);
        this._fetched.add('dashboardSettings');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getDashboardParsingConfig() {
    if (this._fetched.has('dashboardParsingConfig')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.dashboardParsingConfigUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._dashboardParsingConfig.set(parseDashboardParsingConfigCsv(csv));
        this._loadingCount.update(n => n - 1);
        this._fetched.add('dashboardParsingConfig');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }


  getMapInterventiSettings() {
    if (this._fetched.has('mapInterventiSettings')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.mapInterventiSettingsUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._mapInterventiSettings.set(parseDashboardSettingsCsv(csv));
        this._loadingCount.update(n => n - 1);
        this._fetched.add('mapInterventiSettings');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getMapInterventiParsingConfig() {
    if (this._fetched.has('mapInterventiParsingConfig')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.mapInterventiParsingConfigUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._mapInterventiParsingConfig.set(parseDashboardParsingConfigCsv(csv));
        this._loadingCount.update(n => n - 1);
        this._fetched.add('mapInterventiParsingConfig');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }


  getStoryInterventiSettings() {
    if (this._fetched.has('storyInterventiSettings')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.dataStoriesInterventiSettingsUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._storyInterventiSettings.set(parseDashboardSettingsCsv(csv));
        this._loadingCount.update(n => n - 1);
        this._fetched.add('storyInterventiSettings');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getStoryIstatSettings() {
    if (this._fetched.has('storyIstatSettings')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.dataStoriesIstatSettingsUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._storyIstatSettings.set(parseDashboardSettingsCsv(csv) as StoryWidgetSetting[]);
        this._loadingCount.update(n => n - 1);
        this._fetched.add('storyIstatSettings');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getStoryParsingConfig() {
    if (this._fetched.has('storyParsingConfig')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.dataStoriesParsingConfigUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._storyParsingConfig.set(parseDashboardParsingConfigCsv(csv));
        this._loadingCount.update(n => n - 1);
        this._fetched.add('storyParsingConfig');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getDataStoriesList() {
    if (this._fetched.has('dataStoriesList')) return;
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.dataStoriesListUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._dataStoriesList.set(parseDataStoryCsv(csv));
        this._loadingCount.update(n => n - 1);
        this._fetched.add('dataStoriesList');
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  private _hiddenUnioni = computed(() => new Set(this._unioniNascoste().map(u => u.unione)));

  getDataForStory(storyId: string): DataInterface[] {
    const hidden = this._hiddenUnioni();
    return (this._datiStories()[storyId] ?? []).filter(d => !hidden.has(d.unione!));
  }

  interventi = computed(() => {
    const hidden = this._hiddenUnioni();
    return this._interventi().filter(i => !hidden.has(i.unione));
  });
  comuniPolygons = this._comuniPolygons.asReadonly();

  dashboardSettings = this._dashboardSettings.asReadonly();
  dashboardParsingConfig = this._dashboardParsingConfig.asReadonly();


  mapInterventiSettings = this._mapInterventiSettings.asReadonly();
  mapInterventiParsingConfig = this._mapInterventiParsingConfig.asReadonly();

  dataStoriesList = this._dataStoriesList.asReadonly();
  storyInterventiSettings = this._storyInterventiSettings.asReadonly();
  storyIstatSettings = this._storyIstatSettings.asReadonly();
  storyParsingConfig = this._storyParsingConfig.asReadonly();
  datiIstatByFvid = computed(() => {
    const hidden = this._hiddenUnioni();
    return Object.fromEntries(
      Object.entries(this._datiIstatByFvid()).map(([k, arr]) => [k, arr.filter(d => !hidden.has(d.unione!))])
    );
  });
  unioniNascoste = this._unioniNascoste.asReadonly();
}
