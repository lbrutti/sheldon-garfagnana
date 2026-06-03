import {ComponentFixture, TestBed} from '@angular/core/testing';

import CardDescrizioneComponent from './card-descrizione.component';

describe(CardDescrizioneComponent, () => {
  let component: CardDescrizioneComponent;
  let fixture: ComponentFixture<CardDescrizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDescrizioneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDescrizioneComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
