import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperOptionsComponent } from './swiper-options.component';

describe('SwiperOptionsComponent', () => {
  let component: SwiperOptionsComponent;
  let fixture: ComponentFixture<SwiperOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwiperOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
