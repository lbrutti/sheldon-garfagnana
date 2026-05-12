import {Component, Input} from '@angular/core';
import {MatTabLink, MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import Footer from '../footer/footer';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'sheldon-navigation',
  imports: [
    MatTabNav,
    MatTabNavPanel,
    MatTabLink,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export default class Navigation {
  @Input() links: { url: string, name: string }[] = [];
  protected activeLink = '';
}
