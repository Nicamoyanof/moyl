import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PordRelacionadosDatosProdComponent } from './pord-relacionados-datos-prod.component';

describe('PordRelacionadosDatosProdComponent', () => {
  let component: PordRelacionadosDatosProdComponent;
  let fixture: ComponentFixture<PordRelacionadosDatosProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PordRelacionadosDatosProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PordRelacionadosDatosProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
