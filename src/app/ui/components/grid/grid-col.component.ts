import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-grid-col',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class GridColComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
