import {ComponentFixture, TestBed} from '@angular/core/testing';

import CardStoryComponent from './card-story.component';

describe(CardStoryComponent, () => {
  let component: CardStoryComponent;
  let fixture: ComponentFixture<CardStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardStoryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
