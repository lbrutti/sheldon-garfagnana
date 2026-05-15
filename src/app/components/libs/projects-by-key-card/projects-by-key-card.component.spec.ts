import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectsByKeyCardComponent} from './projects-by-key-card.component';

describe(ProjectsByKeyCardComponent, () => {
  let component: ProjectsByKeyCardComponent;
  let fixture: ComponentFixture<ProjectsByKeyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsByKeyCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsByKeyCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
