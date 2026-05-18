import {ComponentFixture, TestBed} from '@angular/core/testing';

import JsKpiComponent from './js-kpi.component';

describe(JsKpiComponent, () => {
  let component: JsKpiComponent;
  let fixture: ComponentFixture<JsKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsKpiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JsKpiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
