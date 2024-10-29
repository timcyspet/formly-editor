import { TestBed } from '@angular/core/testing';

import { FormlyEditorMaterialService } from './formly-editor-material.service';

describe('FormlyEditorMaterialService', () => {
  let service: FormlyEditorMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormlyEditorMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
