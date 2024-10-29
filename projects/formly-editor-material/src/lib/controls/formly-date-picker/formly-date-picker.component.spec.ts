import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyDatePickerComponent } from './formly-date-picker.component';

describe('FormlyDatePickerComponent', () => {
  let component: FormlyDatePickerComponent;
  let fixture: ComponentFixture<FormlyDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyDatePickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
