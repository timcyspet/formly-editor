import { Component } from '@angular/core';
import { IDefaultForm } from '@sesan07/ngx-formly-editor';

@Component({
    selector: 'app-material',
    template: `
        <editor-main
            autosaveStorageKey="editor-material"
            [defaultForm]="defaultForm"
        >
        </editor-main>
    `,
})
export class MaterialComponent {
    defaultForm: IDefaultForm = {
        name: 'Material Form Zero',
        fields: [
            {
                type: 'formly-group',
                fieldGroup: [
                    {
                        type: 'formly-group',
                        fieldGroup: [
                            {
                                type: 'input',
                                wrappers: ['form-field'],
                                props: {
                                    label: 'Label',
                                    placeholder: 'Placeholder',
                                    description: 'Description',
                                    required: true,
                                },
                                key: 'input',
                            },
                            {
                                type: 'number',
                                wrappers: ['form-field'],
                                props: {
                                    label: 'Label',
                                    placeholder: 'Placeholder',
                                    description: 'Description',
                                    required: true,
                                    type: 'number',
                                },
                                key: 'num',
                            },
                            {
                                type: 'textarea',
                                wrappers: ['form-field'],
                                props: {
                                    label: 'Label',
                                    placeholder: 'Placeholder',
                                    description: 'Description',
                                    required: true,
                                },
                                key: 'textarea',
                                className: 'tw-col-span-2',
                            },
                        ],
                        className: 'tw-col-span-2',
                        fieldGroupClassName: 'tw-grid tw-grid-cols-2 tw-gap-2',
                        key: 'group2',
                    },
                    {
                        type: 'radio',
                        wrappers: ['form-field'],
                        props: {
                            label: 'Label',
                            placeholder: 'Placeholder',
                            description: 'Description',
                            required: true,
                            options: [
                                {
                                    value: 1,
                                    label: 'Option 1',
                                },
                                {
                                    value: 2,
                                    label: 'Option 2',
                                },
                                {
                                    value: 3,
                                    label: 'Option 3',
                                },
                                {
                                    value: 4,
                                    label: 'Option 4',
                                    disabled: true,
                                },
                            ],
                        },
                        key: 'radio',
                        className: 'tw-col-6',
                    },
                    {
                        type: 'select',
                        wrappers: ['form-field'],
                        props: {
                            label: 'Label',
                            placeholder: 'Placeholder',
                            description: 'Description',
                            required: true,
                            multiple: true,
                            selectAllOption: 'Select All',
                            options: [
                                {
                                    value: 1,
                                    label: 'Option 1',
                                },
                                {
                                    value: 2,
                                    label: 'Option 2',
                                },
                                {
                                    value: 3,
                                    label: 'Option 3',
                                },
                                {
                                    value: 4,
                                    label: 'Option 4',
                                    disabled: true,
                                },
                            ],
                        },
                        key: 'select',
                        className: 'tw-col-6',
                    },
                ],
                key: 'group',
                fieldGroupClassName: 'tw-grid tw-grid-cols-2 tw-gap-2',
            },
            {
                type: 'checkbox',
                wrappers: ['form-field'],
                props: {
                    label: 'Accept terms',
                    description: 'In order to proceed, please accept terms',
                    pattern: 'true',
                    required: true,
                },
                validation: {
                    messages: {
                        pattern: 'Please accept the terms',
                    },
                },
                key: 'checkbox',
                className: 'tw-mt-2',
            },
        ],
        model: {
            group: {
                group2: {
                    input: 'Hello!',
                    num: 321,
                    textarea: 'Bye!',
                },
                radio: 1,
                select: [2, 3],
            },
            checkbox: true,
        },
    };
}
