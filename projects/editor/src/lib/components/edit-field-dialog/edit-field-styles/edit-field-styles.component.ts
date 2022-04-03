import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { EditorService } from '../../../services/editor-service/editor.service';
import { IEditorFormlyField } from '../../../services/editor-service/editor.types';
import { StyleService } from '../../../services/style-service/style.service';
import { ContainerType, BreakpointType } from '../../../services/style-service/style.types';
import { IChipListProperty } from '../../property/chip-list-property/chip-list-property.types';
import { PropertyType } from '../../property/property.types';

@Component({
    selector: 'lib-edit-field-styles',
    templateUrl: './edit-field-styles.component.html',
    styleUrls: ['./edit-field-styles.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFieldStylesComponent implements OnChanges {
    @Input() editField: IEditorFormlyField;

    @Output() valueChanged: EventEmitter<void> = new EventEmitter();

    containerType: typeof ContainerType = ContainerType;
    containerTypes: ContainerType[] = Object.values(ContainerType);
    breakpointTypes: BreakpointType[] = Object.values(BreakpointType);

    parentContainer: ContainerType;
    childrenContainer: ContainerType;

    public flexOptions: string[] = ['column', 'column-reverse', 'row', 'row-reverse'];

    public columnOptions: string[] = [...Array(3).keys()].map(i => i + 1 + '');
    public rowOptions: string[] = [...Array(3).keys()].map(i => i + 1 + '');

    public columnStartOptions: string[] = [ ...Array(3).keys() ].map(i => i + 1 + '');
    public columnSpanOptions: string[] = [ ...Array(3).keys() ].map(i =>  i + 1 + '');
    public rowStartOptions: string[] = [ ...Array(3).keys() ].map(i =>  i + 1 + '');
    public rowSpanOptions: string[] = [ ...Array(3).keys() ].map(i =>  i + 1 + '');

    private _generalProperty: IChipListProperty;
    private _breakpointProperties: Map<BreakpointType, IChipListProperty> = new Map();

    private _generalChildrenProperty: IChipListProperty;
    private _breakpointChildrenProperties: Map<BreakpointType, IChipListProperty> = new Map();

    constructor(private _editorService: EditorService, private _styleService: StyleService) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes.editField) {
            return;
        }

        this._setupProperties();

        if (this.editField.parentFieldId) {
            this._setupParent();
        }

        if (this.editField.canHaveChildren) {
            this._setupChildren();
            this._setupChildrenProperties();
        }
    }

    onChildrenGroupStyleChanged(value: ContainerType): void {
        if (this.editField.fieldGroupClassName) {
            if (this.childrenContainer) {
                this.editField.fieldGroupClassName = this.editField.fieldGroupClassName.replace(
                    new RegExp(`(?<!-)${this.childrenContainer}(?!-)`),
                    value
                );
            } else {
                this.editField.fieldGroupClassName = value +  ' ' + this.editField.fieldGroupClassName;
            }
        } else {
            this.editField.fieldGroupClassName = value;
        }
        // TODO remove related group styles (flex-direction, grid-cols...) arr.split(' ').filter(!contains prevType).join(' ')
        this.childrenContainer = value;
        this.valueChanged.emit();
    }

    onGridClassChanged(value: string, classNamePrefix: string, breakpoint?: BreakpointType): void {
        this._setClassValue('className', value, classNamePrefix, breakpoint);
    }

    onChildrenGridClassChanged(value: string, classNamePrefix: string, breakpoint?: BreakpointType): void {
        this._setClassValue('fieldGroupClassName', value, classNamePrefix, breakpoint);
    }

    getBreakpointTitle(breakpointType: BreakpointType): string {
        switch(breakpointType) {
            case BreakpointType.SMALL: return 'Small devices';
            case BreakpointType.MEDIUM: return 'Medium devices';
            case BreakpointType.LARGE: return 'Large devices';
            case BreakpointType.EXTRA_LARGE: return 'Extra large devices';
            default: throw new Error('Unknown breakpoint');
        }
    }

    getBreakpointTooltip(breakpointType: BreakpointType): string {
        switch(breakpointType) {
            case BreakpointType.SMALL: return 'Portrait tablets and large phones, 600px and up';
            case BreakpointType.MEDIUM: return 'Landscape tablets, 768px and up';
            case BreakpointType.LARGE: return 'Laptops/desktops, 992px and up';
            case BreakpointType.EXTRA_LARGE: return 'Large laptops and desktops, 1200px and up';
            default: throw new Error('Unknown breakpoint');
        }
    }

    getGroupStyleName(groupStyle: ContainerType): string {
        switch (groupStyle) {
            case ContainerType.FLEX: return 'Flex';
            case ContainerType.GRID: return 'Grid';
        }
    }

    getClassValue(classNamePrefix: string, breakpoint?: BreakpointType): string {
        return this._getClassValue('className', classNamePrefix, breakpoint);
    }

    getChildrenClassValue(classNamePrefix: string, breakpoint?: BreakpointType): string {
        return this._getClassValue('fieldGroupClassName', classNamePrefix, breakpoint);
    }

    getProperty(breakpoint?: BreakpointType): IChipListProperty {
        return breakpoint ? this._breakpointProperties.get(breakpoint) : this._generalProperty;
    }

    getChildrenProperty(breakpoint?: BreakpointType): IChipListProperty {
        return breakpoint ? this._breakpointChildrenProperties.get(breakpoint) : this._generalChildrenProperty;
    }

    private _setupParent(): void {
        const parent: IEditorFormlyField = this._editorService.getField(this.editField.formId, this.editField.parentFieldId);
        const fieldGroupClassNames: string[] = parent.fieldGroupClassName?.split(' ') ?? [];

        // TODO use regex to match without '-' prefix and suffix
        this.parentContainer = fieldGroupClassNames.find(
            className => (this.containerTypes as string[]).includes(className)
        ) as ContainerType;
    }

    private _setupChildren(): void {
        const fieldGroupClassNames: string[] = this.editField.fieldGroupClassName?.split(' ') ?? [];

        // TODO use regex to match without '-' prefix and suffix
        this.childrenContainer = fieldGroupClassNames.find(className =>
            (this.containerTypes as string[]).includes(className)
        ) as ContainerType;
    }

    private _setupProperties(): void {
        this._generalProperty = this._getProperty('className');

        this.breakpointTypes.forEach(breakpoint => {
            this._breakpointProperties.set(breakpoint, this._getProperty('className', breakpoint));
        });
    }

    private _setupChildrenProperties(): void {
        this._generalChildrenProperty = this._getProperty('fieldGroupClassName');

        this.breakpointTypes.forEach(breakpoint => {
            this._breakpointChildrenProperties.set(breakpoint, this._getProperty('fieldGroupClassName', breakpoint));
        });
    }

    private _setClassValue(property: string, value: string, classNamePrefix: string, breakpoint?: BreakpointType): void {
        const newClassName: string = classNamePrefix + value + (breakpoint ? '-' + breakpoint : '');

        if (this.editField[property]) {
            const regex = new RegExp(`${classNamePrefix}[a-zA-Z\\d-]+${breakpoint ? ('-' + breakpoint) : ''}(?![-\\w])`);

            // Check if class name pattern already exists.
            if (this.editField[property].search(regex) >= 0) {
                this.editField[property] = (this.editField[property] as string).replace(regex, newClassName);
            } else {
                this.editField[property] += ' ' + newClassName;
            }
        } else {
            this.editField[property] = newClassName;
        }
        // TODO remove related group styles (flex-direction, grid-cols...) arr.split(' ').filter(!contains prevType).join(' ')
        this.valueChanged.emit();
    }

    private _getClassValue(property: string, classNamePrefix: string, breakpoint?: BreakpointType): string {
        const regex = new RegExp(`(?<=${classNamePrefix})[a-zA-Z\\d]+(-reverse){0,1}(?=${breakpoint ? `-${breakpoint}` : '(\\s|$)'})`);
        const matches: string[] | null = this.editField[property]?.match(regex);
        return matches ? matches[0] : null;
    }

    private _getProperty(key: string, breakpoint?: BreakpointType): IChipListProperty {
        return {
            key,
            name: 'Custom classes',
            type: PropertyType.CHIP_LIST,
            options: this._styleService.getBreakpointClassNames(breakpoint),
            hiddenOptions: this._styleService.getContainerClassNames(),
            outputString: true,
            isSimple: true,
        };
    }
}