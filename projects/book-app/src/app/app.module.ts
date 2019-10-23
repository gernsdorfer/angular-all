import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from 'ui';
import { BOOK_ROOT_URL } from 'books-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, UiModule],
  providers: [{ provide: BOOK_ROOT_URL, useValue: 'http://localhost:3000' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
