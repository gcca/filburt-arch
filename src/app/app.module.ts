import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    LayoutModule,
  ],
})
export class AppModule { }
