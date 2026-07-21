import { TestBed } from '@angular/core/testing';

import { ProductAPi } from './product-api';

describe('ProductAPi', () => {
  let service: ProductAPi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAPi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
