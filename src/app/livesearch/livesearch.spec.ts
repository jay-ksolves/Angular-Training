import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Livesearch } from './livesearch';

describe('Livesearch', () => {
  let component: Livesearch;
  let fixture: ComponentFixture<Livesearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Livesearch],
    }).compileComponents();

    fixture = TestBed.createComponent(Livesearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
