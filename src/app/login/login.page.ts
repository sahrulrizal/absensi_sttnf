import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Umum } from '../umum/umum';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient,private n : NavController, private r : Router) { }

  ngOnInit() {
  }

  loginForm(form:NgForm) {
    let datas ={
      'nik' : form.value.nik,
      'password' : form.value.password,
    };

    this.http.post<any>(Umum.api+'login', datas).subscribe(data => {
       if (data.status) {
          localStorage.setItem('nama',data.nama);
          localStorage.setItem('nik',data.nik);
          localStorage.setItem('m_id',data.id);
          this.r.navigate(['home']);
       }else{
         alert(data.msg);
       }
    });
    console.log(localStorage);
  }

}
