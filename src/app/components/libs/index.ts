import GlobalSearchComponent from './global-search/global-search.component';
import CardComponent from './card/card.component';
import ProjectsByKeyCardComponent from './projects-by-key-card/projects-by-key-card.component';
import NavigationComponent from './navigation/navigation.component';

export * from './card/card.component';
export * from './projects-by-key-card/projects-by-key-card.component';
export * from './navigation/navigation.component';
export * from './global-search/global-search.component'

export const components = [
  GlobalSearchComponent,
  CardComponent,
  ProjectsByKeyCardComponent,
  NavigationComponent
];
