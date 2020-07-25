import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Umum } from '../umum/umum';
import { Router } from '@angular/router';
import { IonRefresher } from '@ionic/angular';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.page.html',
  styleUrls: ['./notif.page.scss'],
})
export class NotifPage implements OnInit {
  @ViewChild("refresherRef") refresherRef: IonRefresher;
  sdata:boolean = false;
  data:any = [{}];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNotif();
  }

  getNotif(){
    let ok = this.http.get<any>(Umum.api+'notif').subscribe(data => {
      this.data = data;
      if (this.data > 0) this.sdata = true; 
    });

    return this.data;
  }

  async refreshAppointments(refresher: IonRefresher) {
    this.getNotif();
    this.refresherRef.complete();  // Works
  }

}
