import {ComponentFixture, TestBed} from '@angular/core/testing';

import ChartHorizontalStackedBarComponent from './chart-horizontal-stacked-bar.component';

describe(ChartHorizontalStackedBarComponent, () => {
  let component: ChartHorizontalStackedBarComponent;
  let fixture: ComponentFixture<ChartHorizontalStackedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartHorizontalStackedBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartHorizontalStackedBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
