import { Directive, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scInput]'
})
export class InputDirective implements OnInit {

  @Input() scInput: string;
  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) {}

  ngOnInit() {
    this.renderer2.removeClass(this.el.nativeElement, 'form-control');
    this.renderer2.setAttribute(this.el.nativeElement, 'autocomplete', 'off');
    this.renderer2.addClass(this.el.nativeElement, 'ss-form-control');
  }

}
