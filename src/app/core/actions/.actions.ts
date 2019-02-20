import { Action } from '@ngrx/store';

export enum ActionTypes {
  Loads = '[] Load s'
}

export class Loads implements Action {
  readonly type = ActionTypes.Loads;
}

export type Actions = Loads;
