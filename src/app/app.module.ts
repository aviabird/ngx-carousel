import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCarouselLibModule } from 'ngx-carousel-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCarouselLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
