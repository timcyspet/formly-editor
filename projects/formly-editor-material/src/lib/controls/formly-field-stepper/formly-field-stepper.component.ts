import { Component } from '@angular/core';
import { FieldArrayType,FieldType, FormlyModule ,FormlyFieldConfig } from '@ngx-formly/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'formly-field-stepper',
  standalone: true,
  imports: [FormlyModule, MatIconButton, MatIcon, MatButton,MatStepperModule],
  templateUrl: './formly-field-stepper.component.html',
  styleUrl: './formly-field-stepper.component.scss'
})
export class FormlyFieldStepper extends FieldType {
    isValid(field: FormlyFieldConfig): boolean {        
      if (field.key) {
        return field.formControl.valid;
      }  
      return field.fieldGroup ? field.fieldGroup.every((f) => this.isValid(f)) : true;
    }
}
