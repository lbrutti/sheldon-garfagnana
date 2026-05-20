import {Component, signal, Signal} from '@angular/core';
import ChartHorizontalBarComponent from "../../libs/chart-horizontal-bar/chart-horizontal-bar.component";
import ChartLineComponent from "../../libs/chart-line/chart-line.component";
import ChartVerticalBarComponent from "../../libs/chart-vertical-bar/chart-vertical-bar.component";
import KpiComponent from "../../libs/kpi/kpi.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {DataInterface,} from '../../../interfaces';
import {ProjectsApiService} from '../../../services/projects-api.service';

@Component({
  selector: 'sheldon-public-story',
  imports: [
    ChartHorizontalBarComponent,
    ChartLineComponent,
    ChartVerticalBarComponent,
    KpiComponent,
    MatGridList,
    MatGridTile
  ],
  templateUrl: './data-story.html',
  styleUrl: './data-story.scss',
})
export default class DataStory {
  protected popolazione: Signal<DataInterface[]> = signal([]);


  constructor(protected apiService: ProjectsApiService) {

  }


  ngOnInit(): void {
    this.apiService.getPopolazione();
    this.popolazione = this.apiService.popolazione;
  }


}
