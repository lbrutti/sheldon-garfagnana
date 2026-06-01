import {ComponentFixture, TestBed} from '@angular/core/testing';

import ChartSegmentedBarComponent from './chart-segmented-bar.component';

describe(ChartSegmentedBarComponent, () => {
  let component: ChartSegmentedBarComponent;
  let fixture: ComponentFixture<ChartSegmentedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartSegmentedBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartSegmentedBarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
