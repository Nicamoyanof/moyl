import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanzadoDatosProdComponent } from './avanzado-datos-prod.component';

describe('AvanzadoDatosProdComponent', () => {
  let component: AvanzadoDatosProdComponent;
  let fixture: ComponentFixture<AvanzadoDatosProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvanzadoDatosProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvanzadoDatosProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
