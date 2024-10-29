import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyFieldStepper } from './formly-field-stepper.component';
import { FormlyHStepperGroup } from './formly-hstepper-group/formly-hstepper-group.component';

export function stepperSectionType() {
    return importProvidersFrom([
        FormlyModule.forChild({
            types: [
                {
                    name: 'stepper',
                    component: FormlyFieldStepper,
                }, 
                {
                    name: 'stepper-group',
                    component: FormlyHStepperGroup,
                },
            ],
        }),
    ]);
}
