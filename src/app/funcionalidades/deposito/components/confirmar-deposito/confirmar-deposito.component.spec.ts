import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarDepositoComponent } from './confirmar-deposito.component';

describe('ConfirmarDepositoComponent', () => {
  let component: ConfirmarDepositoComponent;
  let fixture: ComponentFixture<ConfirmarDepositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarDepositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
