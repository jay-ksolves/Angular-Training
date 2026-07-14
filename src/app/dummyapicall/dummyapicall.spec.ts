import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummyapicall } from './dummyapicall';

describe('Dummyapicall', () => {
  let component: Dummyapicall;
  let fixture: ComponentFixture<Dummyapicall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dummyapicall],
    }).compileComponents();

    fixture = TestBed.createComponent(Dummyapicall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
