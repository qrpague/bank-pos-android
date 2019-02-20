import { Component, OnInit, Input, AfterContentInit, ContentChild, ElementRef, QueryList, ViewChild } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';
import { InputDirective } from '../../directives/form/input.directive';
import { LabelDirective } from '../../directives/form/label.directive';
import { IconDirective } from '../../directives/form/icon.directive';

@Component({
  selector: 'sc-form-field',
  template: `
  <div class="ss-form-group"
    [class.ss-alert-success]="hasSuccess()"
    [class.ss-alert-warning]="hasWarning()"
    [class.ss-alert-danger]="hasError()">
    <label *ngIf="_scLabel" for="default-input">
      {{_scLabel.label | async}}
    </label>
    <ng-content></ng-content>
    <!--sc-error-field  [errors]="input.errors"></sc-error-field-->
  </div>
  `,
  styles: []
})
export class FormFieldComponent implements OnInit, AfterContentInit {

  public input: any;

  // Incluir regras de exibição para exibição dos erros dos inputs
  // Ex.: submited, dirty, touched
  public rules: string[];
  public _scLabel: LabelDirective;

  @ContentChild(LabelDirective) private scLabel: LabelDirective;
  @ContentChild(IconDirective) private scIcon: IconDirective;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model || this.control;
    this._scLabel = this.scLabel;

    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName');
    }

  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched);

  }

  // TODO: Alterar as validações
  public shouldShowErrors(): boolean {
    return this.control && !this.control.valid && !this.control.pristine &&
      this.control.touched && !!this.control.errors;
  }

  public hasWarning(): boolean {
    return false;
  }

}
