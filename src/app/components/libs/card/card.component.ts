import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatGridTile, MatGridTileText} from '@angular/material/grid-list';

@Component({
  selector: 'sheldon-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIcon,
    MatIconButton,
    MatGridTile,
    MatGridTileText
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export default class CardComponent {}
