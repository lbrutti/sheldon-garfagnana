import WidgetSetting from '../interfaces/widget-setting.interface';
import {csvToJson} from './data.adapter';

const JSON_FIELDS = new Set(['auxReduce', 'groups', 'tooltipProperties']);
const NUMBER_FIELDS = new Set(['limit', 'tileWidth', 'minFontSize']);
const BOOLEAN_FIELDS = new Set(['showSorting']);

export function parseDashboardSettingsCsv(csv: string): WidgetSetting[] {
  const rows: any[] = csvToJson(csv);

  return rows
    .filter(row => !!row['id'])
    .map(row => {
      const entry: any = {};
      for (const [k, v] of Object.entries(row)) {
        if (v === '' || v === null || v === undefined) continue;
        if (JSON_FIELDS.has(k)) {
          try { entry[k] = JSON.parse(v as string); } catch { entry[k] = v; }
        } else if (NUMBER_FIELDS.has(k)) {
          entry[k] = Number(v);
        } else if (BOOLEAN_FIELDS.has(k)) {
          entry[k] = (v as string).toLowerCase() === 'true';
        } else {
          entry[k] = v;
        }
      }
      return entry as WidgetSetting;
    });
}
