import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AlldayComponent } from './main/allday/allday.component';
import { CurrentdayComponent } from './main/currentday/currentday.component';
import {WeatherService} from './weatherService/weather.service';
import { HttpClientModule } from '@angular/common/http';
// import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
// import { AlertModule } from 'ngx-bootstrap';
//bostrap
 import { NgbModule } from  '@ng-bootstrap/ng-bootstrap';
 //materialize css
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlldayComponent,
    CurrentdayComponent
  ],
  imports: [
    BrowserModule,HttpClientModule, NgbModule, NgbModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
