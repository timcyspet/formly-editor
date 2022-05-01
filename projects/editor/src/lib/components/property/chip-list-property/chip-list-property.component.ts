import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { IChipListProperty } from './chip-list-property.types';
import { BasePropertyComponent } from '../base-property.component';
import { PropertyValueChangeType } from '../property.types';

@Component({
    selector: 'lib-chip-list-property',
    templateUrl: './chip-list-property.component.html',
    styleUrls: ['./chip-list-property.component.scss'],
})
export class ChipListPropertyComponent extends BasePropertyComponent implements OnChanges {
    @Input() property: IChipListProperty;

    @ViewChild('input') inputElementRef: ElementRef<HTMLInputElement>;

    public formControl: FormControl = new FormControl();
    public separatorKeysCodes: number[] = [ENTER, COMMA];
    public selectedOptions: string[];
    public selectableOptions: string[];
    public filteredOptions: Observable<string[]>;
	public get hasOptions(): boolean {
		return this.property.isDeletable;
	};

	protected propertyname = 'Chiplist';

    ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);

        if (!changes.property) {
            return;
        }

        this._updateSelectedOptions();

        this.selectableOptions = [...this.property.options];
        this.filteredOptions = this.formControl.valueChanges.pipe(
            startWith(''),
            map((option: string) => option ? this._filter(option) : this.selectableOptions.slice())
        );
    }

    isHidden(option: string): boolean {
        return this.property.hiddenOptions
            ? this.property.hiddenOptions.includes(option)
            : false;
    }

    onAdd(event: MatChipInputEvent): void {
        const input: HTMLInputElement = event.input;
        const value: string = event.value;
        this._updateSelectedOptions();

        if ((value || '').trim()) {
            this.selectedOptions.push(value.trim());
            this._updateValue();
        }

        if (input) {
            input.value = '';
        }

        this.formControl.setValue(null);
    }

    onRemove(option: string): void {
        this._updateSelectedOptions();
        const index: number = this.selectedOptions.indexOf(option);
        if (index >= 0) {
            this.selectedOptions.splice(index, 1);
            this._updateValue();
        }
    }

    onSelected(event: MatAutocompleteSelectedEvent): void {
        this._updateSelectedOptions();
        this.selectedOptions.push(event.option.viewValue);
        this.inputElementRef.nativeElement.value = '';
        this.formControl.setValue(null);
        this._updateValue();
    }

    private _filter(value: string): string[] {
        const filterValue: string = value.toLowerCase();
        return this.selectableOptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

    private _updateSelectedOptions(): void {
        if (this.target[this.property.key]) { // If the target already has some selection
            const existingOptions: string[] = this.property.outputString
                ? (this.target[this.property.key] as string).split(' ')
                : this.target[this.property.key] as string[];

            this.selectedOptions = [...existingOptions];
        } else {
            this.selectedOptions = [];
        }
    }

    private _updateValue(): void {
        let newValue: string | string[];
        if (this.property.outputString) {
            newValue = this.selectedOptions.join(' ');
        } else  {
            newValue = this.selectedOptions.slice();
        }

        this.onValueChanged({
            type: PropertyValueChangeType.MODIFY,
            path: this.path,
            value: newValue
        });
    }
}
