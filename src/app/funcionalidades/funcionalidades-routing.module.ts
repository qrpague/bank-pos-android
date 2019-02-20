import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformarValorComponent } from './informar-valor/informar-valor.component';
import { ShowQrCodeComponent } from './show-qr-code/show-qr-code.component';
import { SucessoPagamentoComponent } from './sucesso-pagamento/sucesso-pagamento.component';

const routes: Routes = [
  {
    path: '', component: InformarValorComponent,
  },
  {
    path: 'show-qr-code/:codigo/:valor', component: ShowQrCodeComponent
  },
  {
    path: 'sucesso-pagamento', component: SucessoPagamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionalidadesRoutingModule { }
