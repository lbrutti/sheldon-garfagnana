import GlobalSearchComponent from './global-search/global-search.component';
import CardComponent from './card/card.component';
import ChartHorizontalBarComponent from './chart-horizontal-bar/chart-horizontal-bar.component';
import NavigationComponent from './navigation/navigation.component';
import ChartVerticalBarComponent from './chart-vertical-bar/chart-vertical-bar.component';
import {DynamicFilterComponent} from './dynamic-filter/dynamic-filter.component';
import ChartLineComponent from './chart-line/chart-line.component';
import JsKpiComponent from './js-kpi/js-kpi.component';
import ChartHorizontalStackedBarComponent from './chart-horizontal-stacked-bar/chart-horizontal-stacked-bar.component';

export * from './card/card.component';
export * from './chart-horizontal-bar/chart-horizontal-bar.component';
export * from './chart-horizontal-stacked-bar/chart-horizontal-stacked-bar.component';
export * from './chart-vertical-bar/chart-vertical-bar.component';
export * from './navigation/navigation.component';
export * from './global-search/global-search.component'
export * from './dynamic-filter/dynamic-filter.component'
export * from './chart-line/chart-line.component';
export * from './js-kpi/js-kpi.component';

export const components = [
  GlobalSearchComponent,
  CardComponent,
  ChartHorizontalBarComponent,
  ChartHorizontalStackedBarComponent,
  ChartVerticalBarComponent,
  ChartLineComponent,
  NavigationComponent,
  DynamicFilterComponent,
  JsKpiComponent
];
