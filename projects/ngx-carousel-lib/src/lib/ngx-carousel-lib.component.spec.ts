import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCarouselLibComponent } from './ngx-carousel-lib.component';

describe('NgxCarouselLibComponent', () => {
  let component: NgxCarouselLibComponent;
  let fixture: ComponentFixture<NgxCarouselLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCarouselLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCarouselLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
