import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Typeahead } from './typeahead';

describe('Typeahead', () => {
  let component: Typeahead;
  let fixture: ComponentFixture<Typeahead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Typeahead],
    }).compileComponents();

    fixture = TestBed.createComponent(Typeahead);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
