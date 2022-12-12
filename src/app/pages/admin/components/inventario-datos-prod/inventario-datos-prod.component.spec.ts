import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioDatosProdComponent } from './inventario-datos-prod.component';

describe('InventarioDatosProdComponent', () => {
  let component: InventarioDatosProdComponent;
  let fixture: ComponentFixture<InventarioDatosProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioDatosProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventarioDatosProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
