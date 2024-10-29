import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyDatePicker } from './formly-date-picker.component';

export function DatePickerType() {
    return importProvidersFrom([
        FormlyModule.forChild({
            types: [
                {
                    name: 'datepicker',
                    component: FormlyDatePicker,
                }
            ],
        }),
    ]);
}
