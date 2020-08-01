import { Component, OnInit, Input } from '@angular/core';
// import '~bootstrap/dist/css/bootstrap.min.css';
@Component({
  selector: 'app-currentday',
  templateUrl: './currentday.component.html',
  styleUrls: ['./currentday.component.scss'],
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
  @Input()
  set isMetric(isMetric: any) {
    isMetric === true ? (this._metricIcon = '℃') : (this._metricIcon = '°F');
  }

  onChanged(increased: any) {
    // this.isMetric = !this.isMetric;
    console.log('CURRENT');
    this.ngOnInit();
  }

  @Input()
  set current(current: any) {
    this._current = current;

    this._iconUrl = `http://openweathermap.org/img/wn/${this._current?.weather[0].icon}@4x.png`;
    this._dt = new Date(current?.dt * 1000).toLocaleString('ru-RU', {
      weekday: 'long',
    });
    this._currentTime = new Date(current?.dt * 1000).toLocaleTimeString(
      'ru-RU',
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
    this._isLoad = true;
  }
  public upperFirstChar(str: any) {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }
  constructor() {
    this._currentTime = '';
    this._iconUrl = '';
  }
  showCelcit() {}

  ngOnInit(): void {}
}
