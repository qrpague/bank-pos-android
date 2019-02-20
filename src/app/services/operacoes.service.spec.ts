import { TestBed, inject } from '@angular/core/testing';

import { OperacoesService } from './operacoes.service';

describe('OperacoesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperacoesService]
    });
  });

  it('should be created', inject([OperacoesService], (service: OperacoesService) => {
    expect(service).toBeTruthy();
  }));
});
