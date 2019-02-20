import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-card-content',
  template: `
    <div class="sc-card-content">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
