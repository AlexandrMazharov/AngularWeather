import { Component, OnInit, Input } from '@angular/core';
import { MainComponent } from '../main.component';
import { AppComponent } from './../../app.component';
import { TranslateService } from '@ngx-translate/core';
// import '~bootstrap/dist/css/bootstrap.min.css';
@Component({
  selector: 'app-currentday',
  templateUrl: './currentday.component.html',
  styleUrls: ['./currentday.component.scss'],
  providers: [AppComponent],
})
export class CurrentdayComponent implements OnInit {
  _iconUrl;
  _dt = '';
  _current: any;
  _currentTime = ' ';
  _tempDay;
  _feelsLike;
  _description;
  _isLoad = false;
  _metricIcon;
  _isNum = true;
  _currentLng;
  _windDirection;
  private translateService: TranslateService;

  @Input()
  set isMetric(isMetric: any) {
    isMetric === true ? (this._metricIcon = '℃') : (this._metricIcon = '°F');
  }

  @Input()
  set current(current: any) {
    this._current = current;

    this._iconUrl = `http://openweathermap.org/img/wn/${this._current?.weather[0].icon}@4x.png`;

    this._dt = this.upperFirstChar(
      new Date(current?.dt * 1000).toLocaleString(this._currentLng, {
        weekday: 'long',
      })
    );

    this._currentTime = new Date(current?.dt * 1000).toLocaleTimeString(
      this._currentLng,
      {
        hour: 'numeric',
        minute: 'numeric',
      }
    );
    this._tempDay = Math.floor(this._current?.temp);
    this._feelsLike = Math.floor(this._current?.feels_like);
    if (this._current?.weather[0].description !== undefined) {
      this._description = this.upperFirstChar(
        this._current?.weather[0].description
      );
    }
    switch (true) {
      case this._current.wind_deg <= 22.5: {
        this._windDirection = this.translateService.instant(
          'HOME.WindDirection1'
        );
        break;
      }

      case 22.5 < this._current.wind_deg && this._current.wind_deg <= 67.5: {
        this._windDirection = this.translateService.instant(
          'HOME.WindDirection2'
        );
        break;
      }

      case 67.5 < this._current.wind_deg && this._current.wind_deg <= 112.5: {
        this._windDirection = this.translateService.instant(
          'HOME.WindDirection3'
        );
        break;
      }

      case 112.5 < this._current.wind_deg && this._current.wind_deg <= 157.5: {
        this._windDirection = this.translateService.instant(
          'HOME.WindDirection4'
        );
        break;
      }

      case 157.5 < this._current.wind_deg && this._current.wind_deg <= 202.5: {
        this._windDirection = this.translateService.instant(
          'HOME.WindDirection5'
        );
        break;
      }

      case 202.5 < this._current.wind_deg && this._current.wind_deg <= 247.5: {
        this._windDirection = this.translateService.instant(
          'HOME.WindDirection6'
        );
        break;
      }

      case 247.5 < this._current.wind_deg && this._current.wind_deg <= 292.5: {
        this._windDirection = this.translateService.instant(
          'HOME.WindDirection7'
        );
        break;
      }
      case 292.5 < this._current.wind_deg && this._current.wind_deg <= 337.5: {
        this._windDirection = this.translateService.instant(
          'HOME.WindDirection8'
        );
        break;
      }
      case 337.5 < this._current.wind_deg && this._current.wind_deg <= 360: {
        this._windDirection = this.translateService.instant(
          'HOME.WindDirection1'
        );
        break;
      }
    }    
    this._isLoad = true;
  }
  onChanged(increased: any) {
    this.ngOnInit();
  }
  public upperFirstChar(str: any) {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  constructor(main: MainComponent, translateService: TranslateService) {
    this.translateService = translateService;
    this._currentLng = main.currentLng;
    // console.log('_currentLng: ' + this._currentLng);

    this._currentTime = '';
    this._iconUrl = '';
  }

  ngOnInit(): void {}
}
