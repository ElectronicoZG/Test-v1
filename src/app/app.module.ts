import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:  [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],

  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }