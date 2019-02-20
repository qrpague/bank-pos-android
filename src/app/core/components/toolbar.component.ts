import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sc-toolbar',
  template: `
    Toolbar
  `,
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
