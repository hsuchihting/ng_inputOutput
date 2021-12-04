import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss'],
})
export class MiddleComponent implements OnInit {
  @Input() middleNodeData=[];
  @Input() middleList = [];
  @Output() lastNodeData = new EventEmitter();
  @Output() lastList = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

    this.middleData();
    this.middleListEmit();
  }

  middleData() {
    console.log(this.middleNodeData);





    // this.lastNodeData.emit(this.middleNodeData);
    // console.log('middleNodeData', this.lastNodeData.emit(this.middleNodeData));
  }

  middleListEmit() {
    console.log(this.middleList);
    // this.lastList.emit(this.middleList);
    // console.log('lastList', this.lastList.emit(this.middleList));
  }
}
