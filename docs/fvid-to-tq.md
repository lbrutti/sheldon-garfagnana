# Filter View → TQ Query — Apps Script

Paste this script into the **settings spreadsheet** to auto-generate GViz TQ queries
when a `fvid` (Google Sheets filter view ID) is entered in the istat settings sheet.

## Setup

1. Open the settings spreadsheet → **Extensions → Apps Script**
2. In the left sidebar, click **+** next to **Services**
3. Find **Google Sheets API**, select it, click **Add** (leave the identifier as `Sheets`)
4. Paste the script below into the editor, save
5. **Triggers (clock icon) → Add trigger**
   - Function: `onFvidEdit`
   - Event source: From spreadsheet
   - Event type: **On edit**
6. Add a `query` column to the istat settings sheet (if not already present)

Once active: pasting a `fvid` value into the `fvid` column automatically writes
the equivalent TQ `WHERE` clause into the `query` column on the same row.

---

## Script

```javascript
const DATA_SPREADSHEET_ID = '1WdSofKLdOmodsFbHiEVUmAM3vhaDqCjxZRuiSemUxas';

function onFvidEdit(e) {
  const sheet = e.range.getSheet();
  const editedRow = e.range.getRow();
  const editedCol = e.range.getColumn();
  if (editedRow === 1) return;

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const fvidCol = headers.indexOf('fvid') + 1;
  const queryCol = headers.indexOf('query') + 1;
  if (!fvidCol || !queryCol || editedCol !== fvidCol) return;

  const fvid = String(e.range.getValue() ?? '').trim();
  if (!fvid) return;

  const tq = buildTQFromFvid(fvid);
  sheet.getRange(editedRow, queryCol).setValue(tq);
}

function buildTQFromFvid(fvid) {
  const spreadsheet = Sheets.Spreadsheets.get(DATA_SPREADSHEET_ID, { includeGridData: false });

  for (const sheet of spreadsheet.sheets) {
    const fv = (sheet.filterViews ?? []).find(fv => String(fv.filterViewId) === fvid);
    if (!fv) continue;

    const clauses = (fv.filterSpecs ?? []).flatMap(spec => {
      const col = columnLetter(spec.columnIndex);
      const criteria = spec.filterCriteria ?? {};
      const parts = [];

      if (criteria.hiddenValues?.length) {
        const clauses = criteria.hiddenValues.map(v => {
          if (v.trim() === '') return `${col} IS NOT NULL`;
          const isNum = !isNaN(Number(v));
          const val = isNum ? v.trim() : `'${v.replace(/'/g, "\\'")}'`;
          return `${col} != ${val}`;
        });
        parts.push(`(${clauses.join(' AND ')})`);
      }
      if (criteria.condition) {
        const cond = conditionToTQ(col, criteria.condition);
        if (cond) parts.push(cond);
      }
      return parts;
    });

    return clauses.length ? `SELECT * WHERE ${clauses.join(' AND ')}` : 'SELECT *';
  }

  return '';
}

function conditionToTQ(col, condition) {
  const vals = (condition.values ?? []).map(v => v.userEnteredValue);
  switch (condition.type) {
    case 'TEXT_EQ':                return `${col} = '${vals[0]}'`;
    case 'TEXT_NOT_EQ':            return `${col} != '${vals[0]}'`;
    case 'TEXT_CONTAINS':          return `${col} CONTAINS '${vals[0]}'`;
    case 'TEXT_NOT_CONTAINS':      return `NOT ${col} CONTAINS '${vals[0]}'`;
    case 'TEXT_STARTS_WITH':       return `${col} MATCHES '${vals[0]}.*'`;
    case 'NUMBER_EQ':              return `${col} = ${vals[0]}`;
    case 'NUMBER_NOT_EQ':          return `${col} != ${vals[0]}`;
    case 'NUMBER_GREATER':         return `${col} > ${vals[0]}`;
    case 'NUMBER_GREATER_THAN_EQ': return `${col} >= ${vals[0]}`;
    case 'NUMBER_LESS':            return `${col} < ${vals[0]}`;
    case 'NUMBER_LESS_THAN_EQ':    return `${col} <= ${vals[0]}`;
    case 'NUMBER_BETWEEN':         return `${col} >= ${vals[0]} AND ${col} <= ${vals[1]}`;
    case 'NUMBER_NOT_BETWEEN':     return `(${col} < ${vals[0]} OR ${col} > ${vals[1]})`;
    case 'BLANK':                  return `${col} IS NULL`;
    case 'NOT_BLANK':              return `${col} IS NOT NULL`;
    default:                       return '';
  }
}

function columnLetter(zeroBasedIndex) {
  let letter = '';
  let n = zeroBasedIndex + 1;
  while (n > 0) {
    const rem = (n - 1) % 26;
    letter = String.fromCharCode(65 + rem) + letter;
    n = Math.floor((n - 1) / 26);
  }
  return letter;
}
```

---

## Notes

- The script watches **any sheet** in the settings spreadsheet that has both a `fvid` and a `query` column header.
- Filter criteria using **hidden values** are converted to `NOT Col IN (...)`.
- `TEXT_STARTS_WITH` is converted to a `MATCHES` regex since TQ has no native starts-with operator.
- If the `fvid` is not found in the data spreadsheet, the `query` cell is left empty.
