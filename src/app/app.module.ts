import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportListComponent } from './report-list/report-list.component';
import { MatButtonModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsService } from './reports.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [ReportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
