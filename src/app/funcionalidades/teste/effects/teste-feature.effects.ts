import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TesteFeatureActionTypes } from '../actions/teste-feature.actions';

@Injectable()
export class TesteFeatureEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(TesteFeatureActionTypes.LoadTesteFeatures));

  constructor(private actions$: Actions) {}
}
