import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    Not Found Component
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class NotFoundPageComponent {}
