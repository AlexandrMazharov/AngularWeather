import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldayComponent } from './allday.component';

describe('AlldayComponent', () => {
  let component: AlldayComponent;
  let fixture: ComponentFixture<AlldayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
