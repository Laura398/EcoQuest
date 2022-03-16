import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationViewComponent } from './validation-view.component';

describe('ValidationViewComponent', () => {
  let component: ValidationViewComponent;
  let fixture: ComponentFixture<ValidationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
