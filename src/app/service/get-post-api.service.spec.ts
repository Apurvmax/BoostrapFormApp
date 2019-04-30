import { TestBed, inject } from '@angular/core/testing';

import { GetPostApiService } from './get-post-api.service';

describe('GetPostApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPostApiService]
    });
  });

  it('should be created', inject([GetPostApiService], (service: GetPostApiService) => {
    expect(service).toBeTruthy();
  }));
});
