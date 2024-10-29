import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyUrlInputComponent } from './formly-url-input.component';

describe('FormlyUrlInputComponent', () => {
  let component: FormlyUrlInputComponent;
  let fixture: ComponentFixture<FormlyUrlInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyUrlInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyUrlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
