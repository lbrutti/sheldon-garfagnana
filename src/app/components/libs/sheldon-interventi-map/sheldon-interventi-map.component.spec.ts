import { ComponentFixture, TestBed } from '@angular/core/testing';
import SheldonInterventiMapComponent from './sheldon-interventi-map.component';

describe('SheldonMosaicMapComponent', () => {
  let component: SheldonInterventiMapComponent;
  let fixture: ComponentFixture<SheldonInterventiMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheldonInterventiMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SheldonInterventiMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
