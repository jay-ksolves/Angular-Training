import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngmodelbinding } from './ngmodelbinding';

describe('Ngmodelbinding', () => {
  let component: Ngmodelbinding;
  let fixture: ComponentFixture<Ngmodelbinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngmodelbinding],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngmodelbinding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
