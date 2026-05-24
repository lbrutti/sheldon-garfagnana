import GlobalSearchComponent from './global-search/global-search.component';
import CardComponent from './card/card.component';
import ChartHorizontalBarComponent from './chart-horizontal-bar/chart-horizontal-bar.component';
import NavigationComponent from './navigation/navigation.component';
import ChartBarComponent from './chart-bar/chart-bar.component';
import {DynamicFilterComponent} from './dynamic-filter/dynamic-filter.component';
import ChartLineComponent from './chart-line/chart-line.component';
import KpiComponent from './kpi/kpi.component';
import ChartHorizontalStackedBarComponent from './chart-horizontal-stacked-bar/chart-horizontal-stacked-bar.component';
import ListaComponent from './lista/lista.component';

export * from './card/card.component';
export * from './chart-horizontal-bar/chart-horizontal-bar.component';
export * from './chart-horizontal-stacked-bar/chart-horizontal-stacked-bar.component';
export * from './chart-bar/chart-bar.component';
export * from './navigation/navigation.component';
export * from './global-search/global-search.component'
export * from './dynamic-filter/dynamic-filter.component'
export * from './chart-line/chart-line.component';
export * from './kpi/kpi.component';
export * from './lista/lista.component';

export const components = [
  GlobalSearchComponent,
  CardComponent,
  ChartHorizontalBarComponent,
  ChartHorizontalStackedBarComponent,
  ChartBarComponent,
  ChartLineComponent,
  NavigationComponent,
  DynamicFilterComponent,
  KpiComponent,
  ListaComponent,
];
