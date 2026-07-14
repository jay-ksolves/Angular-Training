import { TestBed } from '@angular/core/testing';
import { DummyApiService } from './dummyapi';


describe('Dummyapi', () => {
  let service: DummyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
