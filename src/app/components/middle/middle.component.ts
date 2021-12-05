import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { APIService } from 'src/app/service/api.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss'],
})
export class MiddleComponent implements OnInit {
  dataItem = [];
  listItem = [];
  constructor(private _api: APIService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.middleData();
    this.middleList();
  }

  middleData() {
    this._api.getData().subscribe((res) => {
      console.log(res);
      //todo 在這邊整理成資料格式要用的方式，並且再把對應到的物件一個一個 push 的 last 的陣列中
    });
  }
  middleList() {
    this._api.getList().subscribe((res) => {
      console.log(res);
      //todo 在這邊整理成資料格式要用的方式，並且再把對應到的物件一個一個 push 的 last 的陣列中
    });
  }
}
