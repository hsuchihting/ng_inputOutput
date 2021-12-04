import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss'],
})
export class MiddleComponent implements OnInit {
  @Input() middleNodeData: any;
  @Input() middleList: any;
  @Output() lastNodeData = new EventEmitter();
  @Output() lastList = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.middleData();
    this.middleListEmit();
  }

  middleData() {
    this.middleNodeData.emit();
    console.log('middleNodeData', this.middleNodeData.emit());
  }

  middleListEmit() {
    this.middleList.emit();
    console.log('middleList', this.middleList.emit());
  }
}
