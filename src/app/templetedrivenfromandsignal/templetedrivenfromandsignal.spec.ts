import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templetedrivenfromandsignal } from './templetedrivenfromandsignal';

describe('Templetedrivenfromandsignal', () => {
  let component: Templetedrivenfromandsignal;
  let fixture: ComponentFixture<Templetedrivenfromandsignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templetedrivenfromandsignal],
    }).compileComponents();

    fixture = TestBed.createComponent(Templetedrivenfromandsignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
