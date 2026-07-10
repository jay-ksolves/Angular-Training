import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forloop } from './forloop';

describe('Forloop', () => {
  let component: Forloop;
  let fixture: ComponentFixture<Forloop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Forloop],
    }).compileComponents();

    fixture = TestBed.createComponent(Forloop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
