import GlobalSearchComponent from './global-search/global-search.component';
import CardComponent from './card/card.component';
import ChartHorizontalBarComponent from './chart-horizontal-bar/chart-horizontal-bar.component';
import NavigationComponent from './navigation/navigation.component';
import ChartBarComponent from './chart-bar/chart-bar.component';
import {DynamicFilterComponent} from './dynamic-filter/dynamic-filter.component';
import ChartLineComponent from './chart-line/chart-line.component';
import KpiComponent from './kpi/kpi.component';
import ChartSegmentedBarComponent from './chart-segmented-bar/chart-segmented-bar.component';
import ListaComponent from './lista/lista.component';
import ChartTreemapComponent from './chart-treemap/chart-treemap.component';
import SheldonMosaicMapComponent from './sheldon-mosaic-map/sheldon-mosaic-map.component';
import ChartLabelComponent from './chart-label/chart-label.component';
import ChartTwoLinesLabelComponent from './chart-two-lines-label/chart-two-lines-label.component';
import ChartTooltipComponent from './chart-tooltip/chart-tooltip.component';
import ReduceToggleComponent from './reduce-toggle/reduce-toggle';
import CardDescrizioneComponent from './card-descrizione/card-descrizione.component';
import ThemeSwitchComponent from './theme-switch/theme-switch.component';
import HeaderComponent from './header/header.component';

export * from './card/card.component';
export * from './chart-label/chart-label.component';
export * from './chart-horizontal-bar/chart-horizontal-bar.component';
export * from './chart-segmented-bar/chart-segmented-bar.component';
export * from './chart-bar/chart-bar.component';
export * from './navigation/navigation.component';
export * from './global-search/global-search.component'
export * from './dynamic-filter/dynamic-filter.component'
export * from './chart-line/chart-line.component';
export * from './kpi/kpi.component';
export * from './lista/lista.component';
export * from './chart-treemap/chart-treemap.component';
export {default as SheldonMosaicMapComponent} from './sheldon-mosaic-map/sheldon-mosaic-map.component';


export const components = [
  HeaderComponent,
  GlobalSearchComponent,
  CardComponent,
  ChartHorizontalBarComponent,
  ChartTreemapComponent,
  ChartTwoLinesLabelComponent,
  ChartSegmentedBarComponent,
  ChartBarComponent,
  ChartLineComponent,
  NavigationComponent,
  DynamicFilterComponent,
  KpiComponent,
  ListaComponent,
  SheldonMosaicMapComponent,
  ChartLabelComponent,
  ChartTwoLinesLabelComponent,
  ChartTooltipComponent,
  ReduceToggleComponent,
  CardDescrizioneComponent,
  ThemeSwitchComponent
];

