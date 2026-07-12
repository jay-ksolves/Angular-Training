import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signpage } from './signpage';

describe('Signpage', () => {
  let component: Signpage;
  let fixture: ComponentFixture<Signpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signpage],
    }).compileComponents();

    fixture = TestBed.createComponent(Signpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
