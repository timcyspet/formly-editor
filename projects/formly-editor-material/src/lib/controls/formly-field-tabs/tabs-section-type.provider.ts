import { importProvidersFrom } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';

import { FormlyFieldTabs } from './formly-field-tabs.component';
import { FormlyTabGroup } from './formly-tab-group/formly-tab-group.component';

export function tabsSectionType() {
    return importProvidersFrom([
        FormlyModule.forChild({
            types: [
                {
                    name: 'tabs',
                    component: FormlyFieldTabs,
                },
                {
                    name: 'tab-group',
                    component: FormlyTabGroup,
                }
            ],
        }),
    ]);
}
