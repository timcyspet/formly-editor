import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyFieldMapFile } from './formly-field-map-file.component';

export function mapFileSectionType() {
    return importProvidersFrom([
        FormlyModule.forChild({
            types: [
                {
                    name: 'matfile',
                    component: FormlyFieldMapFile,
                },
            ],
        }),
    ]);
}
