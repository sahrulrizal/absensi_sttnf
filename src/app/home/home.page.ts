import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Umum } from '../umum/umum';
import { Router } from '@angular/router';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild("refresherRef") refresherRef: IonRefresher;
  sdata:boolean = false;
  data:any = [{}];
  nama:string = "";
  nik:string = "";
  
  constructor(private http: HttpClient,private r : Router) {
    if(localStorage.getItem('m_id') == ''){
      this.r.navigate(['login']);
    }
    this.nama = localStorage.getItem('nama');
    this.nik = localStorage.getItem('nik');
    // console.log(this.data);
        this.getJadwal(); 
        // console.log(Umum.api);
  }

  izin(id,matkul,tgl){
    this.r.navigate(['izin', {'id': id,'matkul' : matkul,'tgl' : tgl}]);
  }

  getJadwal(){
    let ok = this.http.get<any>(Umum.api+'jadwal_matkul?id='+localStorage.getItem('m_id')).subscribe(data => {
      this.data = data;
      if (this.data > 0) this.sdata = true; 
    });

    return this.data;
  }

  logout(){
    localStorage.removeItem('m_id');
    this.r.navigate(['login']);
  }

  async refreshAppointments(refresher: IonRefresher) {
    this.getJadwal();
    this.refresherRef.complete();  // Works
  }


}
