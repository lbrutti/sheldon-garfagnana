import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const settingsDir = resolve(__dir, '../public/settings');

function toCsv(rows) {
  const keys = [...new Set(rows.flatMap(r => Object.keys(r)))];
  const escape = v => {
    if (v === undefined || v === null) return '';
    const s = typeof v === 'object' ? JSON.stringify(v) : String(v);
    return s.includes(',') || s.includes('"') || s.includes('\n')
      ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [
    keys.join(','),
    ...rows.map(r => keys.map(k => escape(r[k])).join(',')),
  ].join('\n');
}

// dashboardSettings.json — already a flat array
const settings = JSON.parse(readFileSync(`${settingsDir}/dashboardSettings.json`, 'utf8'));
writeFileSync(`${settingsDir}/dashboardSettings.csv`, toCsv(settings), 'utf8');
console.log(`✓ dashboardSettings.csv  (${settings.length} rows)`);

// dashboardParsingConfig.json — unwrap the datasets array
const { datasets } = JSON.parse(readFileSync(`${settingsDir}/dashboardParsingConfig.json`, 'utf8'));
writeFileSync(`${settingsDir}/dashboardParsingConfig.csv`, toCsv(datasets), 'utf8');
console.log(`✓ dashboardParsingConfig.csv  (${datasets.length} rows)`);
