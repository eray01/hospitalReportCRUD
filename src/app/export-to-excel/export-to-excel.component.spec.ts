import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportToExcelComponent } from './export-to-excel.component';

describe('ExportToExcelComponent', () => {
  let component: ExportToExcelComponent;
  let fixture: ComponentFixture<ExportToExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportToExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportToExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
