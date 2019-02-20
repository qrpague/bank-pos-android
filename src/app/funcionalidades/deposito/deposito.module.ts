import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepositoRoutingModule } from './deposito-routing.module';
import { InformarContaComponent } from './components/informar-conta/informar-conta.component';
import { DadosDepositoComponent } from './components/dados-deposito/dados-deposito.component';
import { ConfirmarDepositoComponent } from './components/confirmar-deposito/confirmar-deposito.component';
import { UiModule } from '../../ui';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxBrModule } from '@nbfontana/ngx-br';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    DepositoRoutingModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    NgxBrModule.forRoot()
  ],
  declarations: [InformarContaComponent, DadosDepositoComponent, ConfirmarDepositoComponent]
})
export class DepositoModule { }
