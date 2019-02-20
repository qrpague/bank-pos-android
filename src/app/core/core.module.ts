import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as from from './reducers/.reducer';
import { SidenavComponent } from './components/sidenav.component';
import { LayoutComponent } from './components/layout.component';
import { AppComponent } from './containers/app.component';
import { NavItemComponent } from './components/nav-item.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui';
import { ToolbarComponent } from './components/toolbar.component';
import { NotFoundPageComponent } from './containers/not-found-page.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

export const COMPONENTS = [
    SidenavComponent,
    NavItemComponent,
    LayoutComponent,
    ToolbarComponent,
    NotFoundPageComponent,
    AppComponent
];


@NgModule({
  imports: [
      CommonModule,
      LoadingBarHttpClientModule,
      LoadingBarRouterModule,
      UiModule,
      RouterModule
  ],
    declarations: [COMPONENTS],
    exports: [
        AppComponent
    ]
})
export class CoreModule { }
