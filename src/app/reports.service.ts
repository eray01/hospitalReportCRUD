import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  url = 'assets/fake.json';
  constructor(private http: HttpClient) {
    console.log('hi from service');
  }

  getData() {
    return this.http.get(this.url);
  }
}
