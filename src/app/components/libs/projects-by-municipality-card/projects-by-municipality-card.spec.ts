import {ComponentFixture, TestBed} from '@angular/core/testing';

import ProjectsByMunicipalityCard from './projects-by-municipality-card';

describe(ProjectsByMunicipalityCard, () => {
  let component: ProjectsByMunicipalityCard;
  let fixture: ComponentFixture<ProjectsByMunicipalityCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsByMunicipalityCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsByMunicipalityCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
