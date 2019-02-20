import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentAComponent } from './components/component-a/component-a.component';

const routes: Routes = [
    { path: 'testes',  component: ComponentAComponent, runGuardsAndResolvers: 'always' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteRoutingModule { }
