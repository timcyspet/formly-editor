import { ChangeDetectionStrategy, Component, ChangeDetectorRef, AfterViewInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { FormlyConfig, FieldType, FieldTypeConfig, FormlyModule, ɵobserve as observe } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentType } from '@angular/cdk/portal';
import { MatDatepickerModule, MatDatepicker, MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormlyFieldProps } from '../../form-field.wrapper';
import moment from 'moment';



interface DatepickerProps extends FormlyFieldProps {
    datepickerOptions?: Partial<{
        touchUi: boolean;
        opened: boolean;
        disabled: boolean;
        startView: 'month' | 'year' | 'multi-year';
        datepickerTogglePosition: 'suffix' | 'prefix';
        calendarHeaderComponent: ComponentType<any>;
        filter: (date: any | null) => boolean;
        //color?: ThemePalette;
        min: any;
        max: any;
        dateInput: (field: FieldTypeConfig<DatepickerProps>, event: any) => void;
        dateChange: (field: FieldTypeConfig<DatepickerProps>, event: any) => void;

        monthSelected: (field: FieldTypeConfig<DatepickerProps>, event: any, picker: MatDatepicker<any>) => void;
        yearSelected: (field: FieldTypeConfig<DatepickerProps>, event: any, picker: MatDatepicker<any>) => void;

        dateClass: MatCalendarCellClassFunction<any>;
        panelClass: string | string[];
        startAt: any | null;
    }>;
}

@Component({
    selector: 'formly-date-picker',
    standalone: true,
    providers: [provideNativeDateAdapter()],
    imports: [ReactiveFormsModule, FormlyModule, MatFormFieldModule, MatInputModule, MatDatepickerModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './formly-date-picker.component.html',
    styleUrl: './formly-date-picker.component.scss'
})
export class FormlyDatePicker extends FieldType<FieldTypeConfig<DatepickerProps>> implements AfterViewInit, OnDestroy {

    @ViewChild('datepickerToggle', { static: true }) datepickerToggle!: TemplateRef<any>;

    override defaultOptions = {
        props: {
            datepickerOptions: {
                startView: 'month' as const,
                datepickerTogglePosition: 'suffix' as const,
                disabled: false,
                opened: false,
                dateInput: () => { },
                dateChange: (field, event) => { 
                    if (field.formControl?.value != null ) {
                        field.formControl.setValue(moment(field.formControl.value).format())
                    } 
                 },
                monthSelected: () => { },
                yearSelected: () => { },
            },
        },
    };

    private fieldErrorsObserver!: ReturnType<typeof observe>;

    constructor(private config: FormlyConfig, private cdRef: ChangeDetectorRef) {
        super();

    }

    detectChanges() {
        this.options.detectChanges?.(this.field);
    }

    ngAfterViewInit() {
        this.props[this.props.datepickerOptions.datepickerTogglePosition] = this.datepickerToggle;
        observe<boolean>(this.field, ['props', 'datepickerOptions', 'opened'], () => {
            this.cdRef.detectChanges();
        });
        //debugger;
        // temporary fix for https://github.com/angular/components/issues/16761
        if (this.config.getValidatorMessage('matDatepickerParse')) {
            this.fieldErrorsObserver = observe<any>(this.field, ['formControl', 'errors'], ({ currentValue }) => {
                if (currentValue && currentValue.required && currentValue.matDatepickerParse) {
                    const errors = Object.keys(currentValue)
                        .sort((prop) => (prop === 'matDatepickerParse' ? -1 : 0))
                        .reduce((errors, prop) => ({ ...errors, [prop]: currentValue[prop] }), {});

                    this.fieldErrorsObserver?.setValue(errors);
                }
            });
        }
    }

    ngOnDestroy() {
        //super.ngOnDestroy();
        this.fieldErrorsObserver?.unsubscribe();
    }
}
