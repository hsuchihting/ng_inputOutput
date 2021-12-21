import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //#region data
  info = [
    {
      now_node: 'T01',
      node_action: '2',
      action_date: '2021-12-10',
      memo: 'test',
      userName: 'Tom',
    },
    {
      now_node: 'T02',
      node_action: '2',
      action_date: '2021-12-10',
      memo: 'test',
      userName: 'Mary',
    },
  ];

  node = [
    {
      node: 'T01',
      children: ['T02', 'T01_1'], //* children 的第一個節點為下一個主節點的值。
    },
    {
      node: 'T02',
      children: ['T03'],
    },
    {
      node: 'T03',
      children: ['T04'],
    },
    {
      node: 'T04',
      children: ['T05'],
    },
    {
      node: 'T05',
      children: ['T06'],
    },
    {
      node: 'T06',
      children: ['T07'],
    },
    {
      node: 'T07',
      children: ['T08'],
    },
    {
      node: 'T08',
      children: ['T09'],
    },
    {
      node: 'T09',
      children: ['T10'],
    },
    {
      node: 'T10',
      children: [''],
    },
  ];
  //#endregion

  ngOnInit(): void {
    this.process();
  }

  nodeArr: any[] = [];
  nodeInfo: any[] = [];
  process() {
    let node = this.node;
    let info = this.info;
    let newArr: any[] = [];

    node.forEach((item) => {
      let childrenList: { node: string; status: string }[] = [];

      item.children.forEach((childrenNodeName) => {
        //*子節點
        let currentChild = info.find(
          (list) => list.now_node === childrenNodeName
        );
        let childStatus = !!currentChild ? currentChild.node_action : undefined;

        let childNode = {
          node: childrenNodeName,
          status: childStatus ? childStatus : '',
        };
        childrenList.push(childNode);
      });

      //*主節點
      let currentMain = info.find((main) => main.now_node === item.node);
      let mainStatus = !!currentMain ? currentMain.node_action : undefined;

      let mainNode = {
        node: item.node,
        status: mainStatus ? mainStatus : '',
        children: childrenList,
      };
      newArr.push(mainNode);
    });
    this.nodeArr = newArr;
    this.nodeArr.pop(); //* 原始資料是因為結尾的 children 是空字串，在繪圖會噴錯，所以要把最後一個節點移除。
    console.log(this.nodeArr);

    let infoList: any[] = [];
    info.forEach((item) => {
      let info = [];
      info.push(item.userName);
      info.push(item.action_date);
      let nodeName = item.now_node;

      let nodeInfo = {
        node: item.now_node,
        node_name: nodeName ? nodeName : '',
        node_action: item.node_action,
        info: info,
        memo: item.memo ? item.memo : '',
      };
      infoList.push(nodeInfo);
    });

    //*新增主節點給 info 陣列
    this.nodeArr.filter((item) => {
      console.log('item', item.node);

      let infoNode = infoList.find((info) => info.node === item.node);

      if (item.node !== infoNode) {
        console.log(item.node, infoNode);

        let nodeInfo = {
          node: item.node,
          node_action: infoNode.node_action, //*T03 的 node_action 會是 undefined ，所以會噴錯
          node_name: '',
          info: [],
          memo: '',
        };
        this.nodeInfo.push(nodeInfo);
      }
    });

    console.log(this.nodeInfo);
  }
}
