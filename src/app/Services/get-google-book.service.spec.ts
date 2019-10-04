import { TestBed } from '@angular/core/testing';

import { GetGoogleBookService } from './get-google-book.service';

describe('GetGoogleBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetGoogleBookService = TestBed.get(GetGoogleBookService);
    expect(service).toBeTruthy();
  });
});
