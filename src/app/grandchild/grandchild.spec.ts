import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandchild } from './grandchild';

describe('Grandchild', () => {
  let component: Grandchild;
  let fixture: ComponentFixture<Grandchild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grandchild],
    }).compileComponents();

    fixture = TestBed.createComponent(Grandchild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
