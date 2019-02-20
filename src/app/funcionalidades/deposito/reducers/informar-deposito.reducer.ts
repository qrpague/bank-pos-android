import { Action } from '@ngrx/store';
import { InformarDepositoActions, InformarDepositoActionTypes } from '../actions/informar-deposito.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: InformarDepositoActions): State {
  switch (action.type) {

    case InformarDepositoActionTypes.LoadInformarDepositos:
      return state;


    default:
      return state;
  }
}
