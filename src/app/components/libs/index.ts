import GlobalSearchComponent from './global-search/global-search.component';
import CardComponent from './card/card.component';
import ChartHorizontalBarComponent from './chart-horizontal-bar/chart-horizontal-bar.component';
import NavigationComponent from './navigation/navigation.component';
import ChartVerticaleBarComponent from './chart-vertical-bar/chart-vertical-bar.component';

export * from './card/card.component';
export * from './chart-horizontal-bar/chart-horizontal-bar.component';
export * from './chart-vertical-bar/chart-vertical-bar.component';
export * from './navigation/navigation.component';
export * from './global-search/global-search.component'

export const components = [
  GlobalSearchComponent,
  CardComponent,
  ChartHorizontalBarComponent,
  ChartVerticaleBarComponent,
  NavigationComponent
];
