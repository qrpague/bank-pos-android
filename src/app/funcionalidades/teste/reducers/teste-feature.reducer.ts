import { Action } from '@ngrx/store';
import { TesteFeatureActions, TesteFeatureActionTypes } from '../actions/teste-feature.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: TesteFeatureActions): State {
  switch (action.type) {

    case TesteFeatureActionTypes.LoadTesteFeatures:
      return state;


    default:
      return state;
  }
}
