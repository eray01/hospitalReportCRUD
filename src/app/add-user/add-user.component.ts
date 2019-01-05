import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  name: any;
  tcNo: any;
  blood: any;
  address: any;
  fileId: any;
  selectedFile: File;
  reportDetail: any = {};
  constructor(private dataService: ReportsService, private http: HttpClient) { }

  ngOnInit() {
  }

  addUser() {
    this.dataService.postUser(this.fileId, this.name, this.tcNo, this.blood, this.address).then(data => {
      console.log(data);

    });
  }
  addReport() {
    console.log(this.reportDetail);

  }
  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
  }
  formatDate() {
  return  this.reportDetail.date = this.reportDetail.date
    .replace(/^(\d\d)(\d)$/g, '$1/$2').replace(/^(\d\d\/\d\d)(\d+)$/g, '$1/$2').replace(/[^\d\/]/g, '');
  }
  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('files', this.selectedFile);
    this.http.post('http://localhost:8080/uploadMultiple', uploadData)
      .subscribe(event => {
        console.log(event);
      });
  }
}
