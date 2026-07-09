import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventbinding } from './eventbinding';

describe('Eventbinding', () => {
  let component: Eventbinding;
  let fixture: ComponentFixture<Eventbinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventbinding],
    }).compileComponents();

    fixture = TestBed.createComponent(Eventbinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
