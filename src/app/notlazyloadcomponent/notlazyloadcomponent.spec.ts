import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notlazyloadcomponent } from './notlazyloadcomponent';

describe('Notlazyloadcomponent', () => {
  let component: Notlazyloadcomponent;
  let fixture: ComponentFixture<Notlazyloadcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notlazyloadcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Notlazyloadcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
