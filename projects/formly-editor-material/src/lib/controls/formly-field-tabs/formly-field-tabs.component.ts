import { Component } from '@angular/core';
import { FieldArrayType,FieldType, FormlyModule ,FormlyFieldConfig } from '@ngx-formly/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'formly-field-tabs',
  standalone: true,
  imports:  [FormlyModule, MatIconButton, MatIcon, MatButton,MatTabsModule],
  templateUrl: './formly-field-tabs.component.html',
  styleUrl: './formly-field-tabs.component.scss'
})
export class FormlyFieldTabs extends FieldType {
    isValid(field: FormlyFieldConfig): boolean {
      if (field.key) {
        return field.formControl.valid;
      }
  
      return field.fieldGroup ? field.fieldGroup.every((f) => this.isValid(f)) : true;
    }
}
