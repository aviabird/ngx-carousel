import { NgModule } from '@angular/core';
import { NgxCarouselComponent } from './ngx-carousel.component';
import { NgxSlideItemComponent } from './ngx-slide-item/ngx-slide-item.component';

@NgModule({
  imports: [
  ],
  declarations: [NgxCarouselComponent, NgxSlideItemComponent],
  exports: [NgxCarouselComponent, NgxSlideItemComponent]
})
export class NgxCarouselModule { }
