import { ComponentFixture, TestBed } from '@angular/core/testing';
import SheldonMosaicMapComponent from './sheldon-mosaic-map.component';

describe('SheldonMosaicMapComponent', () => {
  let component: SheldonMosaicMapComponent;
  let fixture: ComponentFixture<SheldonMosaicMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheldonMosaicMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SheldonMosaicMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
