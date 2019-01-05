import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportListComponent } from './report-list/report-list.component';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatTableModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsService } from './reports.service';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { AddReportComponent } from './add-report/add-report.component';
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    AddUserComponent,
    ReportDetailsComponent,
    AddReportComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    ImageViewerModule,
    MatFormFieldModule,
    MatProgressSpinnerModule



  ],
  providers: [ReportsService],
  bootstrap: [AppComponent],

})
export class AppModule { }
