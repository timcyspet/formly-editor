import {
    EditorConfig,
    FieldTypeOption,
    FieldWrapperOption,
    ValidatorOption,
    createArrayProperty,
    createBooleanProperty,
    createObjectProperty,
    createSelectProperty,
    createTextProperty,
} from '@sesan07/ngx-formly-editor';

import { defaultForm } from './material.form';
import { PropertyGroupType } from 'projects/editor/src/lib/property/property.types';

export const inputTypeConfig: FieldTypeOption = {
    displayName: 'Input',
    name: 'input',
    icon: 'input',
    keyGenerationPrefix: 'inp',
    defaultConfig: {
        wrappers: ['form-field'],
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },
    properties: [
        createSelectProperty({
            name: 'Type',
            key: 'props.type',
            options: [
                {label: 'Number', value: 'number'},
                {label: 'Text', value: 'text',},
                {label: 'Email',value: 'email',},
                { label: 'Password',value: 'password',},
                { label: 'Time',value: 'time',},
                { label: 'File',value: 'file',},
            ],
        }),
    ],
};

export const numberTypeConfig: FieldTypeOption = {
    displayName: 'Number',
    name: 'number',
    icon: 'pin',
    keyGenerationPrefix: 'num',
    defaultConfig: {   
        props: {
            type: 'number',
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },
    properties: [
        createTextProperty({
            name: 'Min Number',
            key: 'props.min',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Max Number',
            key: 'props.max',
            group:PropertyGroupType.CONTROL,
        }),       
    ],
};

export const passwordTypeConfig: FieldTypeOption = {
    displayName: 'Password',
    name: 'password',
    icon: 'password',
    keyGenerationPrefix: 'pwd',
    defaultConfig: {
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },    
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const textTypeConfig: FieldTypeOption = {
    displayName: 'Text',
    name: 'text',
    icon: 'text_fields',
    keyGenerationPrefix: 'txt',
    defaultConfig: {
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },    
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty ({
            name: 'Maximum Length',
            key: 'props.maxLength',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty ({
            name: 'Minmum Length',
            key: 'props.minlength',
            group:PropertyGroupType.CONTROL,
        }),
        
    ],
};

export const urlTypeConfig: FieldTypeOption = {
    displayName: 'URL',
    name: 'url',
    icon: 'link',
    keyGenerationPrefix: 'url',
    defaultConfig: {
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },    
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
        
    ],
};

export const timeTypeConfig: FieldTypeOption = {
    displayName: 'Time',
    name: 'time',
    icon: 'schedule',
    keyGenerationPrefix: 'tie',
    defaultConfig: {
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },    
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
        
    ],
};

export const emailTypeConfig: FieldTypeOption = {
    displayName: 'Email',
    name: 'email',
    icon: 'mail',
    keyGenerationPrefix: 'ema',
    defaultConfig: {
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },    
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const colorTypeConfig: FieldTypeOption = {
    displayName: 'Colour',
    name: 'color',
    icon: 'palette',
    keyGenerationPrefix: 'clr',
    defaultConfig: {
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },    
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};



export const dateTypeConfig: FieldTypeOption = {
    displayName: 'Date Picker',
    name: 'datepicker',
    icon: 'calendar_month',
    keyGenerationPrefix: 'dse',
    defaultConfig: {
        props: {
            label: 'Choose a date',
            placeholder: 'Choose a date',
            description: 'MM/DD/YYYY',
            required: true,
        },
       
    },    
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const dateRangeTypeConfig: FieldTypeOption = {
    displayName: 'Date Range',
    name: 'daterange',
    icon: 'calendar_month',
    keyGenerationPrefix: 'dre',
    defaultConfig: {
        props: {
            label: 'Choose a date',
            placeholder: 'Choose a date',
            description: 'MM/DD/YYYY – MM/DD/YYYY',
            required: true,
        },
       
    },    
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
        createSelectProperty({
            name: 'Date Format',
            key: 'props.dateRangeOptions.dateFormat',
            options: [
                {label: 'MM/DD/YYYY', value: 'MM/DD/YYYY'},
                {label: 'DD/MM/YYYY', value: 'DD/MM/YYYY',},
                {label: 'YYYY/MM/DD',value: 'YYYY/MM/DD',},
            ],
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const apiSelectTypeConfig: FieldTypeOption = {
    displayName: 'API Select',
    name: 'apiselect',
    icon: 'api',
    keyGenerationPrefix: 'aps',
    defaultConfig: {
        props: {
            label: 'Select an option',
            placeholder: 'Select an option',
            description: 'Select an option',
            apiOptions: {
                url:"https://countriesnow.space/api/v0.1/countries/flag/unicode",
                nameField:"name",
                valueField:"iso3",
                responseObject:"data",
            }
        },
       
    },    
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createTextProperty({
            name: 'API URL',
            key: 'props.apiOptions.url',
            group:PropertyGroupType.CONTROL,
        }), 
        createTextProperty({
            name: 'Response Object',
            key: 'props.apiOptions.responseObject',
            group:PropertyGroupType.CONTROL,
        }),   
        createTextProperty({
            name: 'Value Field',
            key: 'props.apiOptions.valueField',
            group:PropertyGroupType.CONTROL,
        }),    
        createTextProperty({
            name: 'Name Field',
            key: 'props.apiOptions.nameField',
            group:PropertyGroupType.CONTROL,
        }),
        createBooleanProperty({
            name: 'Multiple selections',
            key: 'props.multiple',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const fileTypeConfig: FieldTypeOption = {
    displayName: 'File',
    name: 'matfile',
    keyGenerationPrefix: 'fil',
    defaultConfig: {
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
        },
    },   
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),        
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const checkboxTypeConfig: FieldTypeOption = {
    displayName: 'Checkbox',
    name: 'checkbox',
    icon:'check_box',
    keyGenerationPrefix: 'chk',
    defaultConfig: {
        wrappers: ['form-field'],
        props: {
            label: 'Label',
            description: 'Enter Description',
            pattern: 'true',
            required: true,
        },
        validation: {
            messages: {
                pattern: 'Please accept the terms',
            },
        },
    }
};

export const radioTypeConfig: FieldTypeOption = {
    displayName: 'Radio',
    name: 'radio',
    icon:'radio_button_checked',
    keyGenerationPrefix: 'rad',
    defaultConfig: {
        wrappers: ['form-field'],
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
            options: [
                { value: 1, label: 'Option 1' },
                { value: 2, label: 'Option 2' },
                { value: 3, label: 'Option 3' },
                { value: 4, label: 'Option 4', disabled: true },
            ],
        },
    },
    properties: [        
        createArrayProperty({
            name: 'Options',
            key: 'props.options',
            canAdd: true,
            group:PropertyGroupType.GENERAL,
            childProperty: createObjectProperty({
                isRemovable: true,
                childProperties: [
                    createTextProperty({
                        name: 'Label',
                        key: 'label',
                        group:PropertyGroupType.GENERAL,
                    }),
                    createTextProperty({
                        name: 'Value',
                        key: 'value',
                        outputRawValue: true,
                        group:PropertyGroupType.GENERAL,
                    }),
                    createBooleanProperty({
                        name: 'Disabled',
                        key: 'disabled',
                        group:PropertyGroupType.GENERAL,
                    }),
                ],
            }),
        }),
    ],
};

export const selectTypeConfig: FieldTypeOption = {
    displayName: 'Select',
    name: 'select',
    icon:'checklist',
    keyGenerationPrefix: 'sel',
    defaultConfig: {
        wrappers: ['form-field'],
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
            multiple: true,
            selectAllOption: 'Select All',
            options: [
                { value: 1, label: 'Option 1' },
                { value: 2, label: 'Option 2' },
                { value: 3, label: 'Option 3' },
                { value: 4, label: 'Option 4', disabled: true },
            ],
        },
    },
    properties: [
        createTextProperty({
            name: 'Select all options label',
            key: 'props.selectAllOption',
            group:PropertyGroupType.CONTROL,
        }),
        createBooleanProperty({
            name: 'Multiple selections',
            key: 'props.multiple',
            group:PropertyGroupType.CONTROL,
        }),
        createArrayProperty({
            name: 'Options',
            key: 'props.options',
            canAdd: true,
            group:PropertyGroupType.GENERAL,
            childProperty: createObjectProperty({
                isRemovable: true,
                childProperties: [
                    createTextProperty({
                        name: 'Label',
                        key: 'label',
                        group:PropertyGroupType.GENERAL,
                    }),
                    createTextProperty({
                        name: 'Value',
                        key: 'value',
                        outputRawValue: true,
                        group:PropertyGroupType.GENERAL,
                    }),
                    createBooleanProperty({
                        name: 'Disabled',
                        key: 'disabled',
                        group:PropertyGroupType.GENERAL,
                    }),
                ],
            }),
        }),
    ],
};

export const textareaTypeConfig: FieldTypeOption = {
    displayName: 'Textarea',
    name: 'textarea',
    icon:'description',
    keyGenerationPrefix: 'txt',
    defaultConfig: {
        wrappers: ['form-field'],
        props: {
            label: 'Label',
            placeholder: 'Placeholder',
            description: 'Description',
            required: true,
            rows:2,
        },
    },
    properties: [
        createTextProperty({
            name: 'Number of Rows',
            key: 'props.rows',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const groupTypeConfig: FieldTypeOption = {
    displayName: 'Group',
    name: 'formly-group',
    icon:'group_work',
    disableKeyGeneration: true,
    childrenConfig: {
        path: 'fieldGroup',
    },
    defaultConfig: {
        fieldGroup: [],
    },
};

const repeatTypeConfig: FieldTypeOption = {
    displayName: 'Repeating Section',
    name: 'repeating-section',
    icon:'repeat',
    keyGenerationPrefix: 'rep',
    childrenConfig: {
        path: 'fieldArray',
        isObject: true,
    },
    defaultConfig: {
        props: {
            addText: 'Add Section',
        },
        fieldArray: {
            fieldGroup: [],
        },
    },
    properties: [
        createTextProperty({
            name: 'Add Button Text',
            key: 'props.addText',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

const cardWrapperConfig: FieldWrapperOption = {
    name: 'card',
    properties: [
        createTextProperty({
            name: 'Card Title',
            key: 'props.cardTitle',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const formFieldWrapperConfig: FieldWrapperOption = {
    name: 'form-field',
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
        createTextProperty({
            name: 'Placeholder',
            key: 'props.placeholder',
            group:PropertyGroupType.CONTROL,
        }),
        createTextProperty({
            name: 'Description',
            key: 'props.description',
            group:PropertyGroupType.CONTROL,
        }),
        createBooleanProperty({
            name: 'Required',
            key: 'props.required',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const stepperTypeConfig: FieldTypeOption = {
    displayName: 'Step Frame',
    name: 'stepper',
    icon:'crop_square',
    disableKeyGeneration: true,
    childrenConfig: {
        path: 'fieldGroup',
    },
    defaultConfig: {
        fieldGroup: [],
        props: {
            isLinear: true,
            orientation:'horizontal',
            headerPosition:"top"
        }
    },
    properties: [
        createBooleanProperty({
            name: 'Linear',
            key: 'props.isLinear',   
            group:PropertyGroupType.CONTROL,        
        }),
        createSelectProperty({
            name: 'Orientation',
            key: 'props.orientation',   
            options:[
                {label: 'Horizontal', value: 'horizontal'},
                {label: 'Vertical', value: 'vertical'},
            ] ,
            group:PropertyGroupType.CONTROL,       
        }),
        createSelectProperty({
            name: 'Header Position',
            key: 'props.headerPosition',   
            options:[
                {label: 'Bottom', value: 'bottom'},
                {label: 'Top', value: 'top'},
            ],
            group:PropertyGroupType.CONTROL,    
        })
    ],
};

export const stepGroupTypeConfig: FieldTypeOption = {
    displayName: 'Step Group',
    name: 'stepper-group',
    icon:'screenshot_region',
    disableKeyGeneration: true,
    childrenConfig: {
        path: 'fieldGroup',
    },
    defaultConfig: {
        props: { 
            label: 'Step Title',
            isOptional : false
           
         },
        fieldGroup: [],
    },
    properties: [
        createTextProperty({
            name: 'Step Title',
            key: 'props.label',
            group:PropertyGroupType.CONTROL,
        }),
        createBooleanProperty({
            name: 'IsOptional',
            key: 'props.isOptional',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const tabTypeConfig: FieldTypeOption = {
    displayName: 'Tab Frame',
    name: 'tabs',
    icon: 'tab_group',
    disableKeyGeneration: true,
    childrenConfig: {
        path: 'fieldGroup',
    },
    defaultConfig: {
        fieldGroup: [],
    },
};

export const tabGroupTypeConfig: FieldTypeOption = {
    displayName: 'Tab Group',
    name: 'tab-group',
    icon:'tab_inactive',
    disableKeyGeneration: true,
    childrenConfig: {
        path: 'fieldGroup',
    },
    defaultConfig: {
        props: { label: 'Tab Title' },
        fieldGroup: [],
    },
    properties: [
        createTextProperty({
            name: 'Tab Title',
            key: 'props.label',
            group:PropertyGroupType.CONTROL,
        }),
    ],
};

export const matFileTypeConfig: FieldTypeOption = {
    displayName: 'File',
    name: 'matfile',
    icon:'upload_file',
    keyGenerationPrefix: 'maf',
    defaultConfig: {
        props: { label: 'Step Title' }
    },
    properties: [
        createTextProperty({
            name: 'Label',
            key: 'props.label',
            group:PropertyGroupType.GENERAL,
        }),
    ],
};

export const validatorOptions: ValidatorOption[] = [
    {
        name: 'Ip',
        key: 'ip',
    },
];
export const asyncValidatorOptions: ValidatorOption[] = [
    {
        name: 'Ip Async',
        key: 'ipAsync',
    },
];

export const materialEditorConfig: EditorConfig = {
    id: 'editor-material',
    fieldOptions: [  
        {
            displayName: 'Basic Controls',
            icon:'tune',            
            children: [textTypeConfig,numberTypeConfig,dateTypeConfig,checkboxTypeConfig,radioTypeConfig,selectTypeConfig, ],
        },
        {
            displayName: 'Advanced Controls',
            icon:'display_settings',            
            children: [dateRangeTypeConfig,textareaTypeConfig,matFileTypeConfig,colorTypeConfig,emailTypeConfig,urlTypeConfig,timeTypeConfig,passwordTypeConfig,apiSelectTypeConfig ],
        },
        {
            displayName: 'Layout Controls',
            icon:'space_dashboard',            
            children: [groupTypeConfig,repeatTypeConfig ],
        },         
        {
            displayName: 'Stepper',
            icon:'view_array',
            children: [stepperTypeConfig,stepGroupTypeConfig],
        },
        {
            displayName: 'Tabs',
            icon: 'tab',
            children: [tabTypeConfig,tabGroupTypeConfig],
        },
        
    ],
    wrapperOptions: [cardWrapperConfig, formFieldWrapperConfig],
    validatorOptions,
    asyncValidatorOptions,
    defaultForm,
};
