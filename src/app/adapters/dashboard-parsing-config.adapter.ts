import {DashboardParsingConfig, DatasetConfig} from '../interfaces';
import {csvToJson} from './data.adapter';

export function parseDashboardParsingConfigCsv(csv: string): DashboardParsingConfig {
  const rows: any[] = csvToJson(csv);

  const datasets: DatasetConfig[] = rows
    .filter(row => !!row['key'])
    .map(row => {
      const entry: any = {};
      for (const [k, v] of Object.entries(row)) {
        if (v === '' || v === null || v === undefined) continue;
        if (k === 'mapping') {
          try { entry[k] = JSON.parse(v as string); } catch { entry[k] = v; }
        } else {
          entry[k] = v;
        }
      }
      return entry as DatasetConfig;
    });

  return {datasets};
}
