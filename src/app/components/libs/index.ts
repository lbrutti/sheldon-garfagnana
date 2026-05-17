import GlobalSearchComponent from './global-search/global-search.component';
import CardComponent from './card/card.component';
import ChartHorizontalBarComponent from './chart-horizontal-bar/chart-horizontal-bar.component';
import NavigationComponent from './navigation/navigation.component';
import ChartVerticalBarComponent from './chart-vertical-bar/chart-vertical-bar.component';
import {DynamicFilterComponent} from './dynamic-filter/dynamic-filter.component';
import ChartLineComponent from './chart-line/chart-line.component';
import KpiComponent from './kpi/kpi.component';

export * from './card/card.component';
export * from './chart-horizontal-bar/chart-horizontal-bar.component';
export * from './chart-vertical-bar/chart-vertical-bar.component';
export * from './navigation/navigation.component';
export * from './global-search/global-search.component'
export * from './dynamic-filter/dynamic-filter.component'
export * from './chart-line/chart-line.component';
export * from './kpi/kpi.component';

export const components = [
  GlobalSearchComponent,
  CardComponent,
  ChartHorizontalBarComponent,
  ChartVerticalBarComponent,
  ChartLineComponent,
  NavigationComponent,
  DynamicFilterComponent,
  KpiComponent
];
