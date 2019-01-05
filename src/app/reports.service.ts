import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  url = 'http://localhost:8080/';
  testurl = 'assets/fake.json';
  myIds: Array<Number> = [];
  constructor(private http: HttpClient) {
    console.log('hi from service');
  }

  getData() {
    return this.http.get(this.testurl);
  }
  saveIds(produIds: any) {
    console.log(produIds, 'id geldi');

    this.myIds = produIds;
  }
  retrieveIDs() {
    return this.myIds;
  }
  getUser() {
    return new Promise(resolve => {
      this.http.get(this.url + 'user/all')
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);

          }
        );
    });
  }

  getUserDetail(id) {
    return new Promise(resolve => {
      this.http.get(this.url + 'user/' + id)
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);
          }
        );
    });
  }
  getUserSearch(query) {
    return new Promise(resolve => {
      this.http.get(this.url + 'user/find/' + query)
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);
          }
        );
    });
  }
  getUserWithFileId(fileId) {
    return new Promise(resolve => {
      this.http.get(this.url + 'user/' + fileId)
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);
          }
        );
    });
  }
  getReportWithFileId(fileId) {
    return new Promise(resolve => {
      this.http.get(this.url + 'report/fileid/' + fileId)
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);
          }
        );
    });
  }

  postUser(fileId, name, tc, blood, address) {
    const postparams = {
      fileId: fileId,
      name: name,
      tcId: tc,
      blood: blood,
      address: address
    };
    return new Promise(resolve => {
      this.http
        .post(this.url + 'user/add', JSON.stringify(postparams), {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);
          }
        );
    });
  }
}
