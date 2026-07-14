import { TestBed } from '@angular/core/testing';

import { Dummyapi } from './dummyapi';

describe('Dummyapi', () => {
  let service: Dummyapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dummyapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
