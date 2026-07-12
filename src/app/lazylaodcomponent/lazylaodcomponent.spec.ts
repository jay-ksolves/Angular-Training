import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazylaodcomponent } from './lazylaodcomponent';

describe('Lazylaodcomponent', () => {
  let component: Lazylaodcomponent;
  let fixture: ComponentFixture<Lazylaodcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lazylaodcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lazylaodcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
