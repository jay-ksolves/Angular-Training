import { TestBed } from '@angular/core/testing';

import { Imageapi } from './imageapi';

describe('Imageapi', () => {
  let service: Imageapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Imageapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
