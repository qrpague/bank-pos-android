import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { CardTitleComponent } from './components/card/card-title.component';
import { CardSubtitleComponent } from './components/card/card-subtitle.component';
import { CardContentComponent } from './components/card/card-content.component';
import { CardActionsComponent } from './components/card/card-actions.component';
import { CardFooterComponent } from './components/card/card-footer.component';
import { CardHeaderComponent } from './components/card/card-header.component';
import { ColDirective } from './directives/grid/col.directive';
import { GridComponent } from './components/grid/grid.component';

import { RowDirective } from './directives/grid/row.directive';
import { ColXsDirective } from './directives/grid/col-xs.directive';
import { GridColComponent } from './components/grid/grid-col.component';
import { FormComponent } from './components/form/form.component';
import { FormFieldComponent } from './components/form/form-fieldcomponent';
import { TextareaComponent } from './components/form/textarea.component';
import { InputDirective } from './directives/form/input.directive';
import { LabelDirective } from './directives/form/label.directive';
import { IconDirective } from './directives/form/icon.directive';
import { ErrorFieldComponent } from './components/form/error-field.component';
import { EmailValidatorDirective } from './directives/validators/email-validator.directive';
import { CpfComponent } from './components/form/cpf.component';
import { NgxBrModule } from '@nbfontana/ngx-br';
import { FormsModule } from '@angular/forms';
import { CpfDirective } from './directives/form/cpf.directive';


const DIRECTIVES = [
  ColXsDirective,
  RowDirective,
  InputDirective,
  LabelDirective,
  ColDirective,
  IconDirective,
  EmailValidatorDirective,
  CpfDirective,
];

// TODO: Separar Componentes e diretivas
const COMPONENTS  = [
  NavbarComponent,
  CardComponent,
  CardTitleComponent,
  CardSubtitleComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardActionsComponent,
  CardFooterComponent,
  ErrorFieldComponent,
  GridComponent,
  FormFieldComponent,
  GridColComponent,
  FormComponent,
  TextareaComponent,
  CpfComponent,
];


@NgModule({
  imports: [ CommonModule, FormsModule,  NgxBrModule.forRoot() ],
  declarations: [ COMPONENTS, DIRECTIVES ],
  exports: [ COMPONENTS, DIRECTIVES ]
})
export class UiModule { }
