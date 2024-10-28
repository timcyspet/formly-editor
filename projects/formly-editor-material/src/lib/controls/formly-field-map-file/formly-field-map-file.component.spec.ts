import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFieldMapFileComponent } from './formly-field-map-file.component';

describe('FormlyFieldMapFileComponent', () => {
  let component: FormlyFieldMapFileComponent;
  let fixture: ComponentFixture<FormlyFieldMapFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyFieldMapFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyFieldMapFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
