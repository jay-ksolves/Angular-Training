import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computedsignals } from './computedsignals';

describe('Computedsignals', () => {
  let component: Computedsignals;
  let fixture: ComponentFixture<Computedsignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Computedsignals],
    }).compileComponents();

    fixture = TestBed.createComponent(Computedsignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
