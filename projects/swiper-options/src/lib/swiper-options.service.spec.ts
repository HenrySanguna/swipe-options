import { TestBed } from '@angular/core/testing';

import { SwiperOptionsService } from './swiper-options.service';

describe('SwiperOptionsService', () => {
  let service: SwiperOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiperOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
