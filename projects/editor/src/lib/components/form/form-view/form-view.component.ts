import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { cloneDeep } from 'lodash-es';
import { EditorService } from '../../../services/editor-service/editor.service';
import { IEditorFormlyField, IForm } from '../../../services/editor-service/editor.types';

@Component({
    selector: 'lib-form-view',
    templateUrl: './form-view.component.html',
    styleUrls: ['./form-view.component.scss'],
})
export class FormViewComponent implements OnInit, OnDestroy {
    @Input() form: IForm;
    @Input() formChanged$: Observable<void>;
    @Input() resetModel$: Observable<void>;

	@Output() modelChanged: EventEmitter<void> = new EventEmitter();

    public fields: IEditorFormlyField[];
    public formGroup: FormGroup = new FormGroup({});
    public options: FormlyFormOptions = {};

    private _destroy$: Subject<void> = new Subject();

    constructor(private _editorService: EditorService) {
    }

    public ngOnInit(): void {
        this._updateForm();
        this.formChanged$
            .pipe(takeUntil(this._destroy$))
            .subscribe(() => this._updateForm());
        this.resetModel$
            .pipe(takeUntil(this._destroy$))
            .subscribe(() => this.options.resetModel({}));
    }

    public ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    private _updateForm(): void {
		this.fields = cloneDeep(this.form.fields);
		this.formGroup = new FormGroup({});
		this.options = {};
    }
}
