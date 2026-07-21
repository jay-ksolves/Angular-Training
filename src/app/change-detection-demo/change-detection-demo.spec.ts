import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionDemo } from './change-detection-demo';

describe('ChangeDetectionDemo', () => {
  let component: ChangeDetectionDemo;
  let fixture: ComponentFixture<ChangeDetectionDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
