import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyDateRange } from './formly-date-range.component';

export function dateRangeType() {
    return importProvidersFrom([
        FormlyModule.forChild({
            types: [
                {
                    name: 'daterange',
                    component: FormlyDateRange,
                },
            ],
        }),
    ]);
}
