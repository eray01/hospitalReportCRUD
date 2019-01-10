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
import { ImageViewerModule } from '@hallysonh/ngx-imageviewer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ExportToExcelComponent } from './export-to-excel/export-to-excel.component';
import { LoginComponent } from './login/login.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { EditReportandUserComponent } from './edit-reportand-user/edit-reportand-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    AddUserComponent,
    ReportDetailsComponent,
    ExportToExcelComponent,
    LoginComponent,
    EditReportandUserComponent,

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
    MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [ReportsService],
  bootstrap: [AppComponent],

})
export class AppModule { }
