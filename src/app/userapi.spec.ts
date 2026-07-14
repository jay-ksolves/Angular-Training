import { TestBed } from '@angular/core/testing';

import { Userapi } from './userapi';

describe('Userapi', () => {
  let service: Userapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Userapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
