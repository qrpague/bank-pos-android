import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import { TesteModule } from './teste/teste.module';
import { HomeModule } from './home/home.module';
import { DadosDepositoComponent } from './deposito/components/dados-deposito/dados-deposito.component';
import { DepositoModule } from './deposito/deposito.module';
import { UiModule } from '../ui';
import { InformarValorComponent } from './informar-valor/informar-valor.component';
import { ShowQrCodeComponent } from './show-qr-code/show-qr-code.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { SucessoPagamentoComponent } from './sucesso-pagamento/sucesso-pagamento.component';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr)


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    NgxCurrencyModule,
    FuncionalidadesRoutingModule,
    TesteModule,
    HomeModule,
    DepositoModule,
    UiModule,
    NgxQRCodeModule,
    QRCodeModule,
    BrMaskerModule
  ],
    declarations: [InformarValorComponent, ShowQrCodeComponent, SucessoPagamentoComponent],
    exports: [UiModule],
    providers:  [{provide: LOCALE_ID, useValue: 'pt-BR'}]
})
export class FuncionalidadesModule { }
