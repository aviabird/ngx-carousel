import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSlideItemComponent } from './ngx-slide-item.component';

describe('NgxSlideItemComponent', () => {
  let component: NgxSlideItemComponent;
  let fixture: ComponentFixture<NgxSlideItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSlideItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSlideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
