import { Component } from '@angular/core';
import { ReportsService } from './reports.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public reportService: ReportsService) {
    /*service denedik*/
    this.reportService.getData().subscribe((data: any) => {

 //     console.log(data.textfile);

    });
  }

}

