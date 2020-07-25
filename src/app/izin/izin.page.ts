import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Umum } from '../umum/umum';

@Component({
  selector: 'app-izin',
  templateUrl: './izin.page.html',
  styleUrls: ['./izin.page.scss'],
})

export class IzinPage implements OnInit {
  id:any;
  matkul: string;
  tgl: string;
  constructor(private http: HttpClient,private n : NavController, private r : ActivatedRoute) { }

  ngOnInit() {
    localStorage.setItem('m_id', '1');

    this.r.paramMap
     .subscribe((a) => {
      this.id = a.get('id');
      this.matkul = a.get('matkul');
      this.tgl = a.get('tgl');
    });
  }

  kembali(){
    this.n.back();
  }

  loginForm(form:NgForm) {
    let datas ={
      'alasan' : form.value.alasan,
      'm_id' : localStorage.getItem('m_id'),
      'jm_id' : this.id
    };

    this.http.post<any>(Umum.api+'izin_tidak_hadir', datas).subscribe(data => {
       alert(data.msg);
       this.n.back();
    });
  }
}
