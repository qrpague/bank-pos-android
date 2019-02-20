import { TestBed, inject } from '@angular/core/testing';

import { SicoobComponentsService } from './sicoob-components.service';

describe('SicoobComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SicoobComponentsService]
    });
  });

  it('should be created', inject([SicoobComponentsService], (service: SicoobComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
