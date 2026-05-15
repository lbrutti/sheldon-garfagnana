import {Component, input} from '@angular/core';

import Card from '../card/card';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatIcon} from '@angular/material/icon';
import {ProjectInterface} from '../../../interfaces';

@Component({
  selector: 'sheldon-project-municipality',
  imports: [
    Card,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIcon
  ],
  templateUrl: './projects-by-municipality-card.html',
  styleUrl: './projects-by-municipality-card.scss',
})
export default class ProjectsByMunicipalityCard {
  projects = input<ProjectInterface[]>([]);

}
