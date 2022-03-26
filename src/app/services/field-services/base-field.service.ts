
import { FormlyTemplateOptions } from '@ngx-formly/core';
import { Injectable } from '@angular/core';
import { CustomFieldType, WrapperType } from './field.types';
import { IBaseFormlyField, IChipListProperty, IObjectProperty, IProperty, PropertyType, StyleService } from 'editor';

@Injectable()
export abstract class BaseFieldService<T extends FormlyTemplateOptions> {

	public constructor(private _styleService: StyleService) { }

	protected _getSharedProperties(): IProperty[] {
		return [
			{
				name: 'Key',
				key: 'key',
				type: PropertyType.TEXT,
                isSimple: true,
			},
			{
				name: 'Default Value',
				key: 'defaultValue',
				type: PropertyType.TEXT,
                isSimple: true,
			},
			{
				key: 'className',
				type: PropertyType.CHIP_LIST,
				options: this._styleService.getAllClassNames(),
				outputString: true,
			} as IChipListProperty,
			{
				key: 'fieldGroupClassName',
				type: PropertyType.CHIP_LIST,
				options: this._styleService.getAllClassNames(),
				outputString: true,
			} as IChipListProperty,
			{
				key: 'expressionProperties',
				type: PropertyType.OBJECT,
				addOptions: [PropertyType.TEXT],
				childProperties: [],
				populateChildrenFromTarget: true,
				valueChangeDebounce: 1000,
			} as IObjectProperty,
		];
	}

    protected _getTemplateOptionsProperty(childProperties: IProperty[], wrappers: WrapperType[]): IObjectProperty {
        wrappers.forEach(wrapper => childProperties.push(...this._getWrapperTOProperties(wrapper)));

        // Remove duplicates with same key
        const propertyMap: Map<string, IProperty> = new Map();
        childProperties.forEach(property => propertyMap.set(property.key + '', property));

        return {
            key: 'templateOptions',
            type: PropertyType.OBJECT,
            childProperties: Array.from(propertyMap.values()),
            isSimple: true,
        };
    }

	protected _getWrapperProperty(wrappers: WrapperType[]): IChipListProperty {
        return {
            key: 'wrappers',
            type: PropertyType.CHIP_LIST,
            options: wrappers,
        };
	}

    // Wrapper template option properties
	private _getWrapperTOProperties(wrapper: WrapperType): IProperty[] {
        switch (wrapper) {
            case WrapperType.CARD:
                return [
					{
                        name: 'Card Title',
						key: 'cardTitle',
						type: PropertyType.TEXT,
                        isSimple: true,
					},
                ];
            case WrapperType.FORM_FIELD:
                return [];
            default: throw new Error(`Unkown wrapper type: '${wrapper}'`);
        }
	}

	public abstract getDefaultConfig(customType?: CustomFieldType): IBaseFormlyField<T>;
	public abstract getProperties(): IProperty[];
}
