import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Injectable, OnInit, inject } from '@angular/core';
import { FieldType, FormlyModule, FieldTypeConfig, FormlyConfig, ɵobserve as observe } from '@ngx-formly/core';
import { DateAdapter, provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatCalendarCellClassFunction,
    MatDatepicker,
    MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormlyFieldComponent, IEditorFormlyField } from '@sesan07/ngx-formly-editor'
import { ComponentType } from '@angular/cdk/portal';
import { FormlyFieldProps } from '../../form-field.wrapper';
import moment from 'moment';


interface DaterangeProps extends FormlyFieldProps {
    dateRangeOptions?: Partial<{
        touchUi: boolean;
        opened: boolean;
        disabled: boolean;
        startView: 'month' | 'year' | 'multi-year';
        datepickerTogglePosition: 'suffix' | 'prefix';
        calendarHeaderComponent: ComponentType<any>;
        filter: (date: any | null) => boolean;
        startdate: FormControl<Date | null>
        enddate: FormControl<Date | null>
        //color?: ThemePalette;
        min: any;
        max: any;
        dateFormat: string;
        // dateInput: (field: FieldTypeConfig<DaterangeProps>, event: any) => void;
        // dateChange: (field: FieldTypeConfig<DaterangeProps>, event: any) => void;

        // monthSelected: (field: FieldTypeConfig<DaterangeProps>, event: any, picker: MatDatepicker<any>) => void;
        // yearSelected: (field: FieldTypeConfig<DaterangeProps>, event: any, picker: MatDatepicker<any>) => void;

        //  dateClass: MatCalendarCellClassFunction<any>;
        // panelClass: string | string[];
        //  startAt: any | null;
    }>;

}

@Component({
    selector: 'formly-date-range',
    standalone: true,
    providers: [provideNativeDateAdapter(),],
    imports: [ReactiveFormsModule, FormsModule, FormlyModule, FormlyFieldComponent, MatInputModule, MatFormFieldModule, MatDatepickerModule],
    templateUrl: './formly-date-range.component.html',
    styleUrl: './formly-date-range.component.scss'
})
export class FormlyDateRange extends FieldType<FieldTypeConfig<DaterangeProps>> implements OnInit {

    formGroup = new FormGroup({
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
    });

    dateformat = "DD/MM/YYYY";

    constructor(private config: FormlyConfig, private cdRef: ChangeDetectorRef) {
        super();
    }

    detectChanges() {
        if (this.formGroup.value.start != null && this.formGroup.value.end != null) {
            this.formControl.setValue({
                start: moment(this.formGroup.value.start).format(),
                end: moment(this.formGroup.value.end).format()
            })
        }
    }

    ngOnInit() {
        if (this.props?.dateRangeOptions?.dateFormat) {
            this.dateformat = this.props.dateRangeOptions.dateFormat;
        }
        if (this.formControl?.value) {
            this.formGroup.setValue({ start: this.formControl.value.start, end: this.formControl.value.end })
        }

    }
}
