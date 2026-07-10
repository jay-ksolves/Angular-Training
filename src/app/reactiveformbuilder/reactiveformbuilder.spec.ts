import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveformbuilder } from './reactiveformbuilder';

describe('Reactiveformbuilder', () => {
  let component: Reactiveformbuilder;
  let fixture: ComponentFixture<Reactiveformbuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactiveformbuilder],
    }).compileComponents();

    fixture = TestBed.createComponent(Reactiveformbuilder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
