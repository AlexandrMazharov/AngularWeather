import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  ViewChild,
  Injectable,
} from '@angular/core';
import { CurrentdayComponent } from './currentday/currentday.component';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
@Injectable()
export class MainComponent implements OnInit {
  currentMetric: FormControl;
  _place: string;
  _weather;

  @Input() isMetric;

  @Input()
  set weather(weather: any) {
    this._weather = weather;
    this._place = weather?.timezone;

    // this._place.search('/');
    this._place = this._place.substring(
      this._place.search('/') + 1,
      this._place.length
    );
  }

  @Input()
  set inputCurrentLng(currentLng) {
    this.currentLng = currentLng;
  }

  @Output() onChanged = new EventEmitter<boolean>();
  @Output() onChangedLanguage = new EventEmitter<String>();

  public currentLng;
  changeLanguage(lng: string) {
    this.currentLng = lng;
    this.onChangedLanguage.emit(lng);
  }

  FieldsChange(increased: any) {
    this.onChanged.emit(increased);
  }

  constructor(public translate: TranslateService) {
    translate.addLangs(['En', 'Ru']);
    translate.setDefaultLang('En');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/En|Ru/) ? browserLang : 'En');
  }

  ngOnInit(): void {
    this.currentMetric = new FormControl();
  }
}
