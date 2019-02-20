import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sc-card-header",
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
