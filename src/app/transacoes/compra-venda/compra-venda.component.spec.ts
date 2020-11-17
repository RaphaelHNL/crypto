import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraVendaComponent } from './compra-venda.component';

describe('CompraVendaComponent', () => {
  let component: CompraVendaComponent;
  let fixture: ComponentFixture<CompraVendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraVendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
