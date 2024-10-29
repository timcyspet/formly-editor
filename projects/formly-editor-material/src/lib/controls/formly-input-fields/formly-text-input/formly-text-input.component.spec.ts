import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyTextInputComponent } from './formly-text-input.component';

describe('FormlyTextInputComponent', () => {
  let component: FormlyTextInputComponent;
  let fixture: ComponentFixture<FormlyTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyTextInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
