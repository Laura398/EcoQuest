import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtipsComponent } from './protips.component';

describe('ProtipsComponent', () => {
  let component: ProtipsComponent;
  let fixture: ComponentFixture<ProtipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
