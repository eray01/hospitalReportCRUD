import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { ReportListComponent } from './report-list/report-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { EditReportandUserComponent } from './edit-reportand-user/edit-reportand-user.component';


const routes: Routes = [
  // { path: '', component: ReportListComponent, pathMatch: 'full' },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'list', component: ReportListComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: ReportDetailsComponent },
  { path: 'detail', component: ReportDetailsComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'edit/:id', component: EditReportandUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
