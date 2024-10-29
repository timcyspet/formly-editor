import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyColorInputComponent } from './formly-color-input.component';

describe('FormlyColorInputComponent', () => {
  let component: FormlyColorInputComponent;
  let fixture: ComponentFixture<FormlyColorInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyColorInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyColorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
