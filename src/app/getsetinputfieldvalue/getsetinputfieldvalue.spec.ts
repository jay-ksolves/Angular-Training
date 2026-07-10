import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getsetinputfieldvalue } from './getsetinputfieldvalue';

describe('Getsetinputfieldvalue', () => {
  let component: Getsetinputfieldvalue;
  let fixture: ComponentFixture<Getsetinputfieldvalue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getsetinputfieldvalue],
    }).compileComponents();

    fixture = TestBed.createComponent(Getsetinputfieldvalue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
