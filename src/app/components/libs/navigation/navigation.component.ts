import {Component, Input} from '@angular/core';
import {MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'sheldon-navigation',
  imports: [
    MatTabNav,
    MatTabNavPanel,
    MatTabLink,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export default class NavigationComponent {
  @Input() links: { url: string, name: string }[] = [];
  protected activeLink = '';
}
