import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from '../reports.service';

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
  test: any = [];
  constructor(
    private route: ActivatedRoute,
    private dataService: ReportsService
  ) { }
  ngOnInit() {
    this.reportId = +this.route.snapshot.paramMap.get('id');
    console.log(this.reportId, 'sayfaya gelen rapor id');
    this.getReport(this.reportId);
    /*sayfaya gelen çoklu idler için burası kullanılacak */
    //  console.log(this.dataService.retrieveIDs(), 'retrieved data');
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
    console.log(reportId, 'servis');

    this.dataService.getReportWithFileId(reportId).then((data: any) => {
      console.log(data);
      this.searchList.push(data);
      this.searchList.forEach((el) => {
        this.imageUrlArray.push(el.resim1, el.resim2, el.resim3);
        this.test.push({ image1: el.resim1, image2: el.resim2, image3: el.resim3 });
      });
      this.isLoading = true;
      // console.log(this.searchList);

    });
  }
}
