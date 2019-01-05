import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from '../reports.service';
import { element } from '@angular/core/src/render3';

export interface ReportInfo {
  bazofilik: any;
  comak: any;
}

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {
  imageUrlArray: any = [];
  index: any;
  counter: any = 0;
  reportId: any;
  displayedColumns: string[] = ['value', 'result'];
  searchList: any = [];
  isLoading = false;
  temp: any = [];
  reportArr: ReportInfo[] = new Array<ReportInfo>();
  constructor(
    private route: ActivatedRoute,
    private dataService: ReportsService
  ) {
    this.imageUrlArray = ['https://material.angular.io/assets/img/examples/shiba2.jpg',
      'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
      'https://i.ytimg.com/vi/K_M655e4gIo/maxresdefault.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLho0WTpw6XnSmFixhL4HUjZIH7JjaYQcyCvKEQBxqxWXaKGgS'];


  }
  ngOnInit() {
    this.reportId = +this.route.snapshot.paramMap.get('id');
    console.log(this.reportId, 'sayfaya gelen rapor id');
    this.getReport(this.reportId);
    /*sayfaya gelen çoklu idler için burası kullanılacak */
    console.log(this.dataService.retrieveIDs(), 'retrieved data');
  }
  forward() {

    this.counter++;
    console.log(this.counter);
    if (this.counter === this.imageUrlArray.length) {
      this.counter = 0;
    }
  }

  back() {
    console.log(this.counter, 'counter');

    if (this.counter === 0) {
      return this.counter = this.imageUrlArray.length - 1;
    } else {
      this.counter--;
    }

  }
  getReport(reportId) {
    this.dataService.getReportWithFileId(reportId).then((data: any) => {
      console.log(data);
      // console.log(Object.values(data));
      // const output = Object.entries(data).map(([key, value]) => ({ key, value }));
      // console.log(output);
      this.searchList.push(data);
      this.isLoading = true;
      // console.log(this.searchList);

    });
  }


}
