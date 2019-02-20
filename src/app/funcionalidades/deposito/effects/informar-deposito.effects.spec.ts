import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InformarDepositoEffects } from './informar-deposito.effects';

describe('InformarDepositoEffects', () => {
  let actions$: Observable<any>;
  let effects: InformarDepositoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InformarDepositoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(InformarDepositoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
