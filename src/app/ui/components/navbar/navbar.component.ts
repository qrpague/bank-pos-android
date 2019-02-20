import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-navbar',
  template: `
  <nav id="navbar" class="ss-navbar ss-navbar-{{color}}">
    <div class="ss-navbar-info">
        <a class="ss-navbar-item ss-navbar-title">{{title}}</a>
    </div>
    <ng-content></ng-content>
  </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input() color = 'default';
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
