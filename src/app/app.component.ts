import { APIService } from './service/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isShow: boolean = false;
  data: any[] = [];
  list: any[] = [];
  constructor() {}

  isShowModal() {
    this.isShow = !this.isShow;
  }
}
