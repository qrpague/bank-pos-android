import { Component, Input } from '@angular/core';

@Component({
  selector: 'sc-sidenav',
  template: `
    <h2>Sidenav !!!!</h2>
  `,
  styles: [],
})
export class SidenavComponent {
  @Input() open = false;
}
