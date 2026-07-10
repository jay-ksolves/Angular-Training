import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custompipe } from './custompipe';

describe('Custompipe', () => {
  let component: Custompipe;
  let fixture: ComponentFixture<Custompipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Custompipe],
    }).compileComponents();

    fixture = TestBed.createComponent(Custompipe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
