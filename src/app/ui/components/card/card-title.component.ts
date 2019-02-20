import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-card-title',
  template: `
    <div class="sc-card-title">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
