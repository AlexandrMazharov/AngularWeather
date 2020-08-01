import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from 'src/app/weatherService/weather.service';
import { async } from 'rxjs/internal/scheduler/async';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public crd;
  private dataService;

  isMetric ;

  onChanged(increased: any) {
    this.isMetric = !this.isMetric;    
    this.ngOnInit();
  }

  public weather;
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  private _http: HttpClient;
  coords: string[];
  constructor(_dataService: WeatherService) {
    this.dataService = _dataService;
  }

  success(pos) {
    this.crd = pos.coords;

    this.weather = this.dataService
      .getWeather(this.crd.latitude, this.crd.longitude, this.isMetric)
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
