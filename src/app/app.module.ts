import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SlideDeckComponent } from './slide-deck/slide-deck.component';

import { SanitizeHtml } from './app.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SlideDeckComponent,
    SanitizeHtml
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
