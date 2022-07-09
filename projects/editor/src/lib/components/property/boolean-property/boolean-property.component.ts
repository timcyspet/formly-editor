import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BasePropertyDirective } from '../base-property.component';
import { IBooleanProperty } from './boolean-property.types';

@Component({
    selector: 'editor-boolean-property',
    templateUrl: './boolean-property.component.html',
    styleUrls: ['./boolean-property.component.scss'],
})
export class BooleanPropertyComponent extends BasePropertyDirective implements OnInit {
	@Input() property: IBooleanProperty;

    public formControl: FormControl;

	public get hasOptions(): boolean {
		return this.property.isRemovable;
	};

    ngOnInit(): void {
        this.formControl = new FormControl(this.target[this.property.key]);
        this.formControl.valueChanges.subscribe(val => this.modifyValue(this.property.key, val));
    }
}
