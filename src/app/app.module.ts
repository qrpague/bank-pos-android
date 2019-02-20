import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FuncionalidadesModule } from './funcionalidades/funcionalidades.module';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './reducers';
import { AppEffects } from './app.effects';
import { AppComponent } from './core/containers/app.component';
import { environment } from '../environments/environment';
import { NgxBrModule } from '@nbfontana/ngx-br';
import {NgxMaskModule} from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule,
    FormsModule,
    ReactiveFormsModule,
    BrMaskerModule,
    LoadingBarHttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    CoreModule,
    FuncionalidadesModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  exports: [
  ]
})
export class AppModule { }
