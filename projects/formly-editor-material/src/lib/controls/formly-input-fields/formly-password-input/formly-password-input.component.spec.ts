import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyPasswordInputComponent } from './formly-password-input.component';

describe('FormlyPasswordInputComponent', () => {
  let component: FormlyPasswordInputComponent;
  let fixture: ComponentFixture<FormlyPasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyPasswordInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
