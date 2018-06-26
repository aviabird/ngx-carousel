import { TestBed, inject } from '@angular/core/testing';

import { NgxCarouselLibService } from './ngx-carousel-lib.service';

describe('NgxCarouselLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxCarouselLibService]
    });
  });

  it('should be created', inject([NgxCarouselLibService], (service: NgxCarouselLibService) => {
    expect(service).toBeTruthy();
  }));
});
