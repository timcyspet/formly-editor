import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyTimeInputComponent } from './formly-time-input.component';

describe('FormlyTimeInputComponent', () => {
  let component: FormlyTimeInputComponent;
  let fixture: ComponentFixture<FormlyTimeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyTimeInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyTimeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
