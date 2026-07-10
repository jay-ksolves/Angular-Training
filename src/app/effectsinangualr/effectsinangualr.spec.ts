import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Effectsinangualr } from './effectsinangualr';

describe('Effectsinangualr', () => {
  let component: Effectsinangualr;
  let fixture: ComponentFixture<Effectsinangualr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Effectsinangualr],
    }).compileComponents();

    fixture = TestBed.createComponent(Effectsinangualr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
