import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarValorComponent } from './informar-valor.component';

describe('InformarValorComponent', () => {
  let component: InformarValorComponent;
  let fixture: ComponentFixture<InformarValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformarValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformarValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
