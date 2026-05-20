# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/
npm test           # run tests with Vitest
npm run watch      # incremental dev build
```

Node version is pinned to v20.19 (see `.nvmrc`). Use `nvm use` before running anything.

## Architecture

This is an **Angular 21** data-dashboard application that visualizes municipal projects and demographic data for the Garfagnana territory in Tuscany, Italy. There is no backend — all data is fetched at runtime from public Google Sheets exports.

### Data flow

```
Google Sheets (CSV export) → ProjectsApiService → Angular signals → Dashboard → chart/KPI components
```

`ProjectsApiService` (`src/app/services/projects-api.service.ts`) fetches two Google Sheets as CSV, parses them with `json-2-csv`, camelcases all field keys, and stores results in `WritableSignal`s exposed as readonly. Components read these signals directly.

### Two data models

- **`InterventoInterface`** — raw project record with Italian camelCased field names (`comune`, `importoTotale`, `ambitoStrategico`, etc.). This is what the API returns.
- **`DataInterface`** — normalized shape for all visualization components: `{ nomeComune, unione, anno, indicatore, valore, udm, note }`. Charts and KPIs always consume `DataInterface[]`.

The adapter (`src/app/adapters/data.adapter.ts`) provides `parseInterventiToDataCollection(interventi, mapping)` for bidirectional key-mapping between the two models. Pass a `{ sourceKey: targetKey }` mapping object.

### Component layers

**Pages** (`src/app/components/pages/`):
- `Dashboard` — main view; loads `interventi` and `popolazione` signals from the service, adapts them for child components
- `DataStories` / `DataStory` — narrative views (lazy-loaded)
- `MapView` — map view (lazy-loaded, currently a stub)

**Reusable lib components** (`src/app/components/libs/`):
- `ChartVerticalBarComponent` — base bar chart; accepts `data: DataInterface[]`, `groupBy`, `reduceBy` (`sum`/`max`/`count`), `limit`, `filterBy`, `sortDirection`. Internally computes grouped chart data via `computed()`.
- `ChartHorizontalBarComponent` — extends `ChartVerticalBarComponent`, overrides `indexAxis: 'y'` and annotation rendering.
- `ChartLineComponent`, `ChartHorizontalStackedBarComponent` — additional chart variants following the same input pattern.
- `KpiComponent` — single aggregate number with animated counter; uses same `DataInterface[]` + `reduceBy` pattern as charts.
- `DynamicFilterComponent` — cascading autocomplete filter driven by the live dataset; emits `FilterOptionInterface[]` via `filterChange` output. Supports a `masterField` that resets other fields when changed.
- `GlobalSearchComponent`, `NavigationComponent`, `CardComponent` — layout utilities.

### Reactivity pattern

The codebase uses Angular Signals throughout — no `Observable` subscriptions in components except in `DynamicFilterComponent`'s form wiring. State flows: `signal` (writable) → `computed` (derived) → template. Side effects use `effect()` + `untracked()` to avoid circular dependencies.

### Routing

| Path | Component | Load |
|---|---|---|
| `/`, `/dashboard` | Dashboard | eager |
| `/stories` | DataStories | lazy |
| `/stories/:id` | DataStory | lazy |
| `/map` | MapView | lazy |

### Other services

`GoogleChartsService` (`src/app/services/google-charts.service.ts`) wraps the Google Visualization API (`google.charts`) for querying Sheets via `gviz/tq` URLs. Load it once via `load()` before calling `query(url)`.

## Code style

Prettier is configured (`.prettierrc`): 100-char line width, single quotes, Angular HTML parser for templates.

All components use the standalone component pattern (no NgModules). Component selectors are prefixed `sheldon-`.
