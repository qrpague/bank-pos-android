import { Action } from '@ngrx/store';

export enum TesteFeatureActionTypes {
  LoadTesteFeatures = '[TesteFeature] Load TesteFeatures'
}

export class LoadTesteFeatures implements Action {
  readonly type = TesteFeatureActionTypes.LoadTesteFeatures;
}

export type TesteFeatureActions = LoadTesteFeatures;
