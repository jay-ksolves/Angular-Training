import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Styleinangular } from './styleinangular';

describe('Styleinangular', () => {
  let component: Styleinangular;
  let fixture: ComponentFixture<Styleinangular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Styleinangular],
    }).compileComponents();

    fixture = TestBed.createComponent(Styleinangular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
