import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SicoobComponentsComponent } from './sicoob-components.component';

describe('SicoobComponentsComponent', () => {
  let component: SicoobComponentsComponent;
  let fixture: ComponentFixture<SicoobComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SicoobComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SicoobComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
