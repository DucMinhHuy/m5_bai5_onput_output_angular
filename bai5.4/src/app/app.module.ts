import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
// import {AppRoutingModule} from "./app-rating.module";

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    // AppRoutingModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
