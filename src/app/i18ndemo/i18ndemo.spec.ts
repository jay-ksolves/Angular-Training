import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18ndemo } from './i18ndemo';

describe('I18ndemo', () => {
  let component: I18ndemo;
  let fixture: ComponentFixture<I18ndemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I18ndemo],
    }).compileComponents();

    fixture = TestBed.createComponent(I18ndemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
