import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformarContaComponent } from './components/informar-conta/informar-conta.component';
import { DadosDepositoComponent } from './components/dados-deposito/dados-deposito.component';
import { ConfirmarDepositoComponent } from './components/confirmar-deposito/confirmar-deposito.component';

const routes: Routes = [{
    path: 'depositos', children: [
        { path: 'informar-conta',  component: InformarContaComponent},
        { path: 'dados-deposito', component: DadosDepositoComponent},
        { path: 'confirmar-deposito', component: ConfirmarDepositoComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositoRoutingModule { }
