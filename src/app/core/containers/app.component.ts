import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <sc-navbar
        title="Qr Pague">
      </sc-navbar>
      <router-outlet></router-outlet>
    </app-layout>
    <ngx-loading-bar></ngx-loading-bar>
  `,
})
export class AppComponent {

  constructor() {
  }

  closeSidenav() {
  }

  openSidenav() {
  }

  logout() {
  }
}

