import { TestBed } from '@angular/core/testing';

import { ApiCallBookService } from './api-call-book.service';

describe('ApiCallBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiCallBookService = TestBed.get(ApiCallBookService);
    expect(service).toBeTruthy();
  });
});
