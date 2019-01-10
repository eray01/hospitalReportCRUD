import { Component, OnInit } from '@angular/core';
import { ReportsService } from './reports.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public reportService: ReportsService, private router: Router, private route: ActivatedRoute) {
  }

}

