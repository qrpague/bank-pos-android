import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-card-actions',
  template: `
    <div class="sc-card-actions ss-group-inline">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardActionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
