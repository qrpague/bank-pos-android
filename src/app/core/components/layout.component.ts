import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <main id="app" class="app-cm">
      <ng-content></ng-content>
    </main>
  `,
  styles: [],
})
export class LayoutComponent {}
