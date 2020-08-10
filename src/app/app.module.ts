import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; // translate
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; // translate

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AlldayComponent } from './main/allday/allday.component';
import { CurrentdayComponent } from './main/currentday/currentday.component';
import { WeatherService } from './weatherService/weather.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
// import { AlertModule } from 'ngx-bootstrap';
//bostrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//materialize css
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
//
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlldayComponent,
    CurrentdayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [WeatherService, { provide: LOCALE_ID, useValue: 'de' }],

  bootstrap: [AppComponent],
})
export class AppModule {}
