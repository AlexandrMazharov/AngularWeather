import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private APIKEY = '43fe13401509e1494a1a80c88243e12d';
  // unitDefault = 'metric';

  getWeather(latt, lngg, isMetric) {
    let unit='';
    if (isMetric) {
      unit = 'metric';
    } else {
      unit = ''
    }
    // console.log
    let MYAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${latt}&lon=${lngg}&exclude={part}&appid=${this.APIKEY}&lang=ru&units=${unit}`;

    console.log(MYAPI);
    return this._http.get(MYAPI);
  }

  constructor(private _http: HttpClient) {}
}
