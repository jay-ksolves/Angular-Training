import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Successfulsignin } from './successfulsignin';

describe('Successfulsignin', () => {
  let component: Successfulsignin;
  let fixture: ComponentFixture<Successfulsignin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Successfulsignin],
    }).compileComponents();

    fixture = TestBed.createComponent(Successfulsignin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
