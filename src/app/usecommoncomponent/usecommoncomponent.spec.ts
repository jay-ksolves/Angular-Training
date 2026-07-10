import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usecommoncomponent } from './usecommoncomponent';

describe('Usecommoncomponent', () => {
  let component: Usecommoncomponent;
  let fixture: ComponentFixture<Usecommoncomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usecommoncomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Usecommoncomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
