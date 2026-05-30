import {Component} from '@angular/core';
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
  selector: 'sheldon-tile',
  imports: [
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatIcon,
    MatIconButton,
    MatGridTileText
  ],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss',
})
export default class TileComponent extends MatGridTile {
}
