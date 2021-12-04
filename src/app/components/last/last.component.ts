import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss']
})
export class LastComponent implements OnInit {
@Input() lastNodeData:any;
@Input() lastList:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.lastNodeData);
    console.log(this.lastList);


  }

}
