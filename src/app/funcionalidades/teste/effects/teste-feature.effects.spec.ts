import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TesteFeatureEffects } from './teste-feature.effects';

describe('TesteFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: TesteFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TesteFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TesteFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
