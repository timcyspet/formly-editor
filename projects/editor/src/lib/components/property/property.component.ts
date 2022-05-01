import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PropertyService } from './property.service';
import { IProperty, IPropertyValueChange, PropertyType } from './property.types';

@Component({
	selector: 'lib-property',
    templateUrl: './property.component.html',
	styleUrls: ['./property.component.scss'],
})
export class PropertyComponent {
	@Input() treeLevel = 0;
	@Input() target: Record<string, any> | any[];
	@Input() property: IProperty;
	@Input() path: string;
	@Input() isSimplified: boolean;
	@Input() isRoot: boolean;

    @Output() public remove: EventEmitter<void> = new EventEmitter();
	@Output() public valueChanged: EventEmitter<IPropertyValueChange> = new EventEmitter();

    @HostBinding('class.tree-item') get isTreeItem(): boolean { return !this.isSimplified; }

	public propertyType: typeof PropertyType = PropertyType;

    constructor(public propertyService: PropertyService) { }

	onKeyChanged(newKey: string, property: IProperty): void {
		const tempValue: any = this.target[property.key];
		delete this.target[property.key];
		this.target[newKey] = tempValue;
		property.key = newKey;
        this.valueChanged.emit();
	}
}
