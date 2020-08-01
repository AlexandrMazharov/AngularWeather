import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  Input,
  ViewChild,
} from '@angular/core';
import { CurrentdayComponent } from './currentday/currentday.component';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Output() onChanged = new EventEmitter<boolean>();

  FieldsChange(increased: any) {
    this.onChanged.emit(increased);
  }
  @Input() weather;
  currentMetric: FormControl;
  @Input() isMetric;

  constructor() {}

  ngOnInit(): void {
    this.currentMetric = new FormControl();
  }
}
