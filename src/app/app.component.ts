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
  constructor(private _api: APIService) {}
  isShowModal() {

    this.isShow = !this.isShow;
    this._api.getData().subscribe((res) => {
      this.data = res;
      console.log('data', this.data);
    });

    this._api.getList().subscribe((res) => {
      this.list = res;
      console.log('list', this.list);
    });
  }
}
