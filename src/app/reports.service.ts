import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


// @author Eray Yılmaz

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  url = 'http://localhost:8080/';
  testurl = 'assets/fake.json';
  myIds: Array<Number> = [];
  constructor(private http: HttpClient, private router: Router) {
    console.log('hi from service');
    this.getHomeResults();
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
  // postLogin() {
  //   const postparams = { username: 'admin', password: '12345' };
  //   localStorage.setItem('username', postparams.username);
  //   localStorage.setItem('password', postparams.password);

  //   return new Promise(resolve => {
  //     this.http
  //       .post(this.url + 'login', JSON.stringify(postparams), {
  //         headers: new HttpHeaders().set('Content-Type', 'application/json')
  //       })
  //       .subscribe(
  //         res => {
  //           resolve(res);
  //         },
  //         error => {
  //           //  console.log(error);
  //           resolve({ error });
  //           this.token = error.error.text;
  //           localStorage.setItem('token', this.token);
  //         }
  //       );
  //   });
  // }

  postLogin(username, password) {
    const postparams = { username: username, password: password };
    //   localStorage.setItem('username', postparams.username);
    //  localStorage.setItem('password', postparams.password);

    return new Promise(resolve => {
      this.http
        .post(this.url + 'login', JSON.stringify(postparams), {
          headers: new HttpHeaders().set('Content-Type', 'application/json')
        })
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            //  console.log(error);
            resolve({ error });
          }
        );
    });
  }
  getUser() {
    const header = { 'Authorization': this.getToken().toString() };

    return new Promise(resolve => {
      this.http.get(this.url + 'user/all', { headers: header })
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
  getAllReports() {
    const token = this.getToken().toString();
    const header = { 'Authorization': token };
    return new Promise(resolve => {
      this.http.get(this.url + 'report/all', { headers: header })
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
  getHomeResults() {
    const token = this.getToken().toString();
    const header = { 'Authorization': token };
    return new Promise(resolve => {
      this.http.get(this.url + 'user/homeresults', { headers: header})
        .subscribe(
          res => {
            resolve(res);
            console.log(res);
          },
          error => {
            console.log(error);
          }
        );
    });
  }

  getUserDetail(id) {
    const token = this.getToken().toString();
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
    const token = this.getToken().toString();
    const header = { 'Authorization': token };

    return new Promise(resolve => {
      this.http.get(this.url + 'user/find/' + query, { headers: header })
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
    const token = this.getToken().toString();
    const header = { 'Authorization': token };

    return new Promise(resolve => {
      this.http.get(this.url + 'user/fileid/' + fileId, { headers: header })
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
    const token = this.getToken().toString();
    const header = { 'Authorization': token };
    return new Promise(resolve => {
      this.http.get(this.url + 'report/fileid/' + fileId, { headers: header })
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

  postUser(fileId, name, tc, blood, address, date) {
    const postparams = {
      fileId: fileId,
      name: name,
      tcId: tc,
      blood: blood,
      address: address,
      date: date
    };
    const token = this.getToken().toString();
    // tslint:disable-next-line:max-line-length
    const header = { 'content-type': 'application/json', 'Authorization': token };
    return new Promise(resolve => {
      this.http
        .post(this.url + 'user/add', JSON.stringify(postparams), {
          headers: header
        })
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);
            resolve(error);
          }
        );
    });
  }
  postImage(file: any, fileId) {
    const token = this.getToken().toString();
    const header = { 'Authorization': token, 'mimeType': 'multipart/form-data' };
    const uploadData = new FormData();
    file.forEach(element => {
      if (element.imageOne) {
        uploadData.append('files', element.imageOne, element.imageOne.name);
      }
      if (element.imageTwo) {
        uploadData.append('files', element.imageTwo, element.imageTwo.name);
      }
      if (element.imageThree) {
        uploadData.append('files', element.imageThree, element.imageOne.name);
      }
    });
    return new Promise(resolve => {
      this.http.post('http://localhost:8080/uploadMultiple/' + fileId, uploadData, { headers: header })
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
  postReport(report: any, images) {
    //  console.log(report);

    const postparams = {
      'dosyaNo': report.fileNo,
      'myloblast': report.myloblast,
      'promyelosit': report.promyelosit,
      'myelosit': report.myelosit,
      'metamyelosit': report.metam,
      'comak': report.comak,
      'parcali': report.parcali,
      'bazofilikSeri': report.bazoSeri,
      'eozinofilikSeri': report.eozino,
      'lenfosit': report.lenfosit,
      'promonosit': report.promonosit,
      'monosit': report.monosit,
      'plazmaHucresi': report.plazma,
      'proeritroblast': report.proerit,
      'bazofilikErit': report.bazoErit,
      'polikromalofilikErit': report.polikro,
      'ortokromantofilikErit': report.ortokro,
      'megakaryositler': report.megakaryo,
      'sellulerite': report.sellul,
      'tani': report.tani,
      'raporEden': report.reporter,
      'rapor': report.report,
      'tarih': report.date,
      'resim1': '',
      'resim2': '',
      'resim3': ''
    };
    for (let i = 0; i < images.length; i++) {
      postparams.resim1 = images[0];
      postparams.resim2 = images[1];
      postparams.resim3 = images[2];
    }
    console.log(postparams, 'resimler eklendi mi');
    const token = this.getToken().toString();
    const header = { 'content-type': 'application/json', 'Authorization': token };
    return new Promise(resolve => {
      this.http
        .post(this.url + 'report/add', postparams, {
          headers: header
        })
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);
            resolve(error);
          }
        );
    });
  }
  updateReport(report: any) {
    //  console.log(report);

    const postparams = {
      'raporId': report.raporId,
      'dosyaNo': report.fileNo,
      'myloblast': report.myloblast,
      'promyelosit': report.promyelosit,
      'myelosit': report.myelosit,
      'metamyelosit': report.metam,
      'comak': report.comak,
      'parcali': report.parcali,
      'bazofilikSeri': report.bazoSeri,
      'eozinofilikSeri': report.eozino,
      'lenfosit': report.lenfosit,
      'promonosit': report.promonosit,
      'monosit': report.monosit,
      'plazmaHucresi': report.plazma,
      'proeritroblast': report.proerit,
      'bazofilikErit': report.bazoErit,
      'polikromalofilikErit': report.polikro,
      'ortokromantofilikErit': report.ortokro,
      'megakaryositler': report.megakaryo,
      'sellulerite': report.sellul,
      'tani': report.tani,
      'raporEden': report.reporter,
      'rapor': report.report,
      'tarih': report.tarih,
      'resim1': '',
      'resim2': '',
      'resim3': ''
    };
    const token = this.getToken().toString();
    const header = { 'content-type': 'application/json', 'Authorization': token };
    console.log(report);
    return new Promise(resolve => {
      this.http
        .put(this.url + 'report/update/' + report.raporId, postparams, {
          headers: header
        })
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);
            resolve(error);
          }
        );
    });
  }

  updateUser(userDetails: any) {
    const postParams = {
      'id': userDetails.id,
      'name': userDetails.name,
      'fileId': userDetails.fileId,
      'tcId': userDetails.tcId,
      'blood': userDetails.blood,
      'address': userDetails.address,
      'date': userDetails.date
    };
    const token = this.getToken().toString();
    const header = { 'content-type': 'application/json', 'Authorization': token };
    return new Promise(resolve => {
      this.http
        .put(this.url + 'user/update/' + userDetails.id, postParams, {
          headers: header
        })
        .subscribe(
          res => {
            resolve(res);
          },
          error => {
            console.log(error);
            resolve(error);
          }
        );
    });
  }

  /* Token boşsa logine yönlendiriyoruz */
  getToken() {
    if (!localStorage.getItem('token')) {
      return this.router.navigate(['']);
    }
    return localStorage.getItem('token');
  }
}
