import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { DiceRollComponent } from './dice-roll.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollComponent
  ],
  imports: [
    MaterialModule,
    MomentModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
