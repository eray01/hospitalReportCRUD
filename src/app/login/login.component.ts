import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  showSpinner = false;
  constructor(private dataService: ReportsService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.showSpinner = true;
    this.dataService.postLogin(this.username, this.password).then((data: any) => {
      console.log(data);
      if (data.status) {
        localStorage.setItem('token', data.message);
        this.router.navigate(['list']);
        console.log(localStorage.getItem('token'), 'token');

      }
      if (data.error) {
        window.alert('Girdiğiniz bilgileri kontrol ediniz');
      }
      this.showSpinner = false;
    });
  }
}
