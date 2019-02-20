import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-nav-item',
  template: `NavItem`,
  styles: [],
})
export class NavItemComponent {
  @Input() icon = '';
  @Input() hint = '';
  @Input() routerLink: string | any[] = '/';
  @Output() navigate = new EventEmitter();
}
