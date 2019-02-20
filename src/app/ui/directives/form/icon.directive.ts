import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[scIcon]'
})
export class IconDirective {

  @Input('scIcon') public icon: string;

  constructor() { }


}
