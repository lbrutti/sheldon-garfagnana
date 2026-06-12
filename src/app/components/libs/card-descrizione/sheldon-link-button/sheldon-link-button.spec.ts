import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheldonLinkButton } from './sheldon-link-button';

describe('SheldonLinkButton', () => {
  let component: SheldonLinkButton;
  let fixture: ComponentFixture<SheldonLinkButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SheldonLinkButton],
    }).compileComponents();

    fixture = TestBed.createComponent(SheldonLinkButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
