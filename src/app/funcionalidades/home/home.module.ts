import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../../ui';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    UiModule
  ],
    declarations: [DashboardComponent],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
