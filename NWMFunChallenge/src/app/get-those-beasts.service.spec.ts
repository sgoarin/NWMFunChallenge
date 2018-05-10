import { TestBed, inject } from '@angular/core/testing';

import { GetThoseBeastsService } from './get-those-beasts.service';

describe('GetThoseBeastsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetThoseBeastsService]
    });
  });

  it('should be created', inject([GetThoseBeastsService], (service: GetThoseBeastsService) => {
    expect(service).toBeTruthy();
  }));
});
