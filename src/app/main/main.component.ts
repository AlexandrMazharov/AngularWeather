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
  @Input() weather;
  currentMetric: FormControl;
  @Input() isMetric;

  @Input()
  set inputCurrentLng(currentLng) {
    this.currentLng = currentLng;
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
