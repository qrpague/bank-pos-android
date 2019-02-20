import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { InformarDepositoActionTypes } from '../actions/informar-deposito.actions';

@Injectable()
export class InformarDepositoEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(InformarDepositoActionTypes.LoadInformarDepositos));

  constructor(private actions$: Actions) {}
}
