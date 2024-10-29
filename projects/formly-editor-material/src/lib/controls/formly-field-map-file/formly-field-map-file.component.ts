import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig,FormlyModule } from '@ngx-formly/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-formly-field-map-file',
  standalone: true,
  imports: [FormlyModule,MatFormFieldModule],
  templateUrl: './formly-field-map-file.component.html',
  styleUrl: './formly-field-map-file.component.scss'
})
export class FormlyFieldMapFile extends FieldType<FieldTypeConfig> {

}
