import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStory } from './data-story';

describe('DataStory', () => {
  let component: DataStory;
  let fixture: ComponentFixture<DataStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataStory],
    }).compileComponents();

    fixture = TestBed.createComponent(DataStory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
