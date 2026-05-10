import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStories } from './data-stories';

describe('DataStories', () => {
  let component: DataStories;
  let fixture: ComponentFixture<DataStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataStories],
    }).compileComponents();

    fixture = TestBed.createComponent(DataStories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
