import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteRoutingModule } from './teste-routing.module';
import * as fromTesteFeature from './reducers/teste-feature.reducer';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
      TesteRoutingModule
  ],
    declarations: [ComponentAComponent]
})
export class TesteModule { }
