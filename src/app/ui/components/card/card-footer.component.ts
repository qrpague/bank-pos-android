import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-card-footer',
  template: `
    <div class="sc-card-footer">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardFooterComponent implements OnInit {

  @Input() divider: boolean;

  constructor() { }

  ngOnInit() {
  }

}
