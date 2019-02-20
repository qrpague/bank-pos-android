import { FuncionalidadesModule } from './funcionalidades.module';

describe('FuncionalidadesModule', () => {
  let funcionalidadesModule: FuncionalidadesModule;

  beforeEach(() => {
    funcionalidadesModule = new FuncionalidadesModule();
  });

  it('should create an instance', () => {
    expect(funcionalidadesModule).toBeTruthy();
  });
});
