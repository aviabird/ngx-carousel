import { TestBed, inject } from '@angular/core/testing';

import { NgxCarouselService } from './ngx-carousel.service';

describe('NgxCarouselService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxCarouselService]
    });
  });

  it('should be created', inject([NgxCarouselService], (service: NgxCarouselService) => {
    expect(service).toBeTruthy();
  }));
});
