import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[scLabel]'
})
export class LabelDirective {

  @Input('scLabel') label: string;

  constructor() { }

}
