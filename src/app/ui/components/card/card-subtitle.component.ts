import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-card-subtitle',
  template: `
    <div class="sc-card-subtitle">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardSubtitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
