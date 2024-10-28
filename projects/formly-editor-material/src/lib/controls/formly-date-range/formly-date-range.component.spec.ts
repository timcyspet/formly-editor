import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyDateRangeComponent } from './formly-date-range.component';

describe('FormlyDateRangeComponent', () => {
  let component: FormlyDateRangeComponent;
  let fixture: ComponentFixture<FormlyDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyDateRangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
