import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-grid',
  template: `
    <div class="ss-grid">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
