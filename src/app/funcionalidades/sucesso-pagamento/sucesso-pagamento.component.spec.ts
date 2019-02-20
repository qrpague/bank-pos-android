import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessoPagamentoComponent } from './sucesso-pagamento.component';

describe('SucessoPagamentoComponent', () => {
  let component: SucessoPagamentoComponent;
  let fixture: ComponentFixture<SucessoPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessoPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessoPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
