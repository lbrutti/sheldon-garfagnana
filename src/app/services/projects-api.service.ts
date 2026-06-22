import {computed, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DashboardParsingConfig, DataInterface, InterventoInterface} from '../interfaces';
import {csvToJson, parseDashboardParsingConfigCsv, parseDashboardSettingsCsv} from '../adapters';
import {FeatureCollection, Point, Polygon} from 'geojson';
import {environment} from '../../environments/environment';
import WidgetSetting from '../interfaces/widget-setting.interface';
import DataStoryInterface from '../interfaces/data-story.interface';
import {parseDataStoryCsv} from '../adapters/data-story.adapter';

@Injectable({
  providedIn: 'root',
})
export class ProjectsApiService {
  private _interventi: WritableSignal<InterventoInterface[]> = signal<InterventoInterface[]>([]);
  private _popolazione: WritableSignal<DataInterface[]> = signal<DataInterface[]>([]);
  private _comuniPoints: WritableSignal<FeatureCollection<Point>> = signal<FeatureCollection<Point>>({
    type: 'FeatureCollection',
    features: []
  });
  private _comuniPolygons: WritableSignal<FeatureCollection<Polygon>> = signal<FeatureCollection<Polygon>>({
    type: 'FeatureCollection',
    features: []
  });
  private _dashboardSettings: WritableSignal<WidgetSetting[]> = signal<WidgetSetting[]>([]);
  private _dashboardParsingConfig: WritableSignal<DashboardParsingConfig | null> = signal<DashboardParsingConfig | null>(null);
  private _mapInterventiSettings: WritableSignal<WidgetSetting[]> = signal<WidgetSetting[]>([]);
  private _mapInterventiParsingConfig: WritableSignal<DashboardParsingConfig | null> = signal<DashboardParsingConfig | null>(null);
  private _dataStoriesList:WritableSignal<DataStoryInterface[]>=signal<DataStoryInterface[]>([]);
  private _loadingCount = signal(0);
  private _fetched = new Set<string>();
  readonly loading = computed(() => this._loadingCount() > 0);

  constructor(
    protected readonly httpClient: HttpClient,
  ) {
  }

  getPopolazione() {
    if (this._fetched.has('popolazione')) return;
    this._fetched.add('popolazione');
    const url = this.getGVizURL(environment.sheets.spreadsheetId, environment.sheets.popolazioneGid, "SELECT * WHERE D = 'nati'");
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(url, {responseType: 'text'}).subscribe({
      next: (res: any) => {
        this._popolazione.set(csvToJson(res) as DataInterface[]);
        this._loadingCount.update(n => n - 1);
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getInterventi() {
    if (this._fetched.has('interventi')) return;
    this._fetched.add('interventi');
    const url = this.getGVizURL(environment.sheets.spreadsheetId, environment.sheets.interventiGid, "SELECT *");
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(url, {responseType: 'text'}).subscribe({
      next: (res: any) => {
        this._interventi.set(csvToJson(res) as InterventoInterface[]);
        this._loadingCount.update(n => n - 1);
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }


  getComuniPolygons() {
    if (this._fetched.has('comuniPolygons')) return;
    this._fetched.add('comuniPolygons');
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.data.comuniPolygons, {responseType: 'json'}).subscribe({
      next: (res: any) => {
        this._comuniPolygons.set(res as FeatureCollection<Polygon>);
        this._loadingCount.update(n => n - 1);
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getGVizURL(spreadsheetId: string, sheetId: string, query: string = 'SELECT *'): string {
    return `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&gid=${sheetId}&tq=${encodeURIComponent(query)}`;

  }

  getDashboardSettings() {
    if (this._fetched.has('dashboardSettings')) return;
    this._fetched.add('dashboardSettings');
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.dashboardSettingsUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._dashboardSettings.set(parseDashboardSettingsCsv(csv));
        this._loadingCount.update(n => n - 1);
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getDashboardParsingConfig() {
    if (this._fetched.has('dashboardParsingConfig')) return;
    this._fetched.add('dashboardParsingConfig');
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.dashboardParsingConfigUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._dashboardParsingConfig.set(parseDashboardParsingConfigCsv(csv));
        this._loadingCount.update(n => n - 1);
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }


  getMapInterventiSettings() {
    if (this._fetched.has('mapInterventiSettings')) return;
    this._fetched.add('mapInterventiSettings');
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.mapInterventiSettingsUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._mapInterventiSettings.set(parseDashboardSettingsCsv(csv));
        this._loadingCount.update(n => n - 1);
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  getMapInterventiParsingConfig() {
    if (this._fetched.has('mapInterventiParsingConfig')) return;
    this._fetched.add('mapInterventiParsingConfig');
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.mapInterventiParsingConfigUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._mapInterventiParsingConfig.set(parseDashboardParsingConfigCsv(csv));
        this._loadingCount.update(n => n - 1);
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }


  getDataStoriesList() {
    if (this._fetched.has('dataStoriesList')) return;
    this._fetched.add('dataStoriesList');
    this._loadingCount.update(n => n + 1);
    this.httpClient.get(environment.settings.dataStoriesListUrl, {responseType: 'text'}).subscribe({
      next: csv => {
        this._dataStoriesList.set(parseDataStoryCsv(csv));
        this._loadingCount.update(n => n - 1);
      },
      error: () => this._loadingCount.update(n => n - 1),
    });
  }

  interventi = this._interventi.asReadonly();
  popolazione = this._popolazione.asReadonly();
  comuniPolygons = this._comuniPolygons.asReadonly();
  dashboardSettings = this._dashboardSettings.asReadonly();
  dashboardParsingConfig = this._dashboardParsingConfig.asReadonly();


  mapInterventiSettings = this._mapInterventiSettings.asReadonly();
  mapInterventiParsingConfig = this._mapInterventiParsingConfig.asReadonly();

  dataStoriesList = this._dataStoriesList.asReadonly();
}
