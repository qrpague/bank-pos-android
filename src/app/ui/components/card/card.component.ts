import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sc-card",
  template: `
    <div class="ss-card">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
