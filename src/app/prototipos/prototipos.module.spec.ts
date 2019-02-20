import { PrototiposModule } from './prototipos.module';

describe('PrototiposModule', () => {
  let prototiposModule: PrototiposModule;

  beforeEach(() => {
    prototiposModule = new PrototiposModule();
  });

  it('should create an instance', () => {
    expect(prototiposModule).toBeTruthy();
  });
});
