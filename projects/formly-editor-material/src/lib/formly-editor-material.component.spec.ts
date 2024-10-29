import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyEditorMaterialComponent } from './formly-editor-material.component';

describe('FormlyEditorMaterialComponent', () => {
  let component: FormlyEditorMaterialComponent;
  let fixture: ComponentFixture<FormlyEditorMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyEditorMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyEditorMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
