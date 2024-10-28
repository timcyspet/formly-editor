import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFieldTabsComponent } from './formly-field-tabs.component';

describe('FormlyFieldTabsComponent', () => {
  let component: FormlyFieldTabsComponent;
  let fixture: ComponentFixture<FormlyFieldTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormlyFieldTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormlyFieldTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
