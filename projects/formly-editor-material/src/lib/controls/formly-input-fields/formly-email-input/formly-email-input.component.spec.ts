import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyEmailInputComponent } from './formly-email-input.component';

describe('FormlyEmailInputComponent', () => {
  let component: FormlyEmailInputComponent;
  let fixture: ComponentFixture<FormlyEmailInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyEmailInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyEmailInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
