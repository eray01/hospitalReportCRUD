import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReportandUserComponent } from './edit-reportand-user.component';

describe('EditReportandUserComponent', () => {
  let component: EditReportandUserComponent;
  let fixture: ComponentFixture<EditReportandUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReportandUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReportandUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
