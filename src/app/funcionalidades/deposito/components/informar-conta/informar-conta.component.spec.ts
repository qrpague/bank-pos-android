import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarContaComponent } from './informar-conta.component';

describe('InformarContaComponent', () => {
  let component: InformarContaComponent;
  let fixture: ComponentFixture<InformarContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformarContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
