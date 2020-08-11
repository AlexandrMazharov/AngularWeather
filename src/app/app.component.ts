import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from 'src/app/weatherService/weather.service';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@Injectable()
export class AppComponent {
  public weather;
  public crd;
  public coords: string[];
  public isMetric;
  public currentLng = 'en';
  private _http: HttpClient;
  private dataService;

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  onChanged(increased: any) {
    this.isMetric = !this.isMetric;
    this.ngOnInit();
  }
  onChangedLanguage(newLng: string) {
    this.currentLng = newLng;
    this.ngOnInit();
  }

  constructor(_dataService: WeatherService) {
    this.dataService = _dataService;
  }

  success(pos) {
    // console.log(pos);
    this.crd = pos.coords;
    this.weather = this.dataService
      .getWeather(
        this.crd.latitude,
        this.crd.longitude,
        this.isMetric,
        this.currentLng
      )
      .subscribe((data) => (this.weather = data));
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  async ngOnInit() {
    let successBind = this.success.bind(this);
    await navigator.geolocation.getCurrentPosition(
      // this.success,
      successBind,
      this.error,
      this.options
    );
  }
}
