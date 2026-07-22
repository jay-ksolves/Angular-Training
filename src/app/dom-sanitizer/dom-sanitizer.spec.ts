import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomSanitizer } from './dom-sanitizer';

describe('DomSanitizer', () => {
  let component: DomSanitizer;
  let fixture: ComponentFixture<DomSanitizer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomSanitizer],
    }).compileComponents();

    fixture = TestBed.createComponent(DomSanitizer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
