import { Action } from '@ngrx/store';

export enum InformarDepositoActionTypes {
  LoadInformarDepositos = '[InformarDeposito] Load InformarDepositos'
}

export class LoadInformarDepositos implements Action {
  readonly type = InformarDepositoActionTypes.LoadInformarDepositos;
}

export type InformarDepositoActions = LoadInformarDepositos;
