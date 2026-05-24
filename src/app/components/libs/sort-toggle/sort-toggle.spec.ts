import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortToggle } from './sort-toggle';

describe('SortToggle', () => {
  let component: SortToggle;
  let fixture: ComponentFixture<SortToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(SortToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
