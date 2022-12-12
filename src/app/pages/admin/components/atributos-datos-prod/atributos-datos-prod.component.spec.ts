import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosDatosProdComponent } from './atributos-datos-prod.component';

describe('AtributosDatosProdComponent', () => {
  let component: AtributosDatosProdComponent;
  let fixture: ComponentFixture<AtributosDatosProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosDatosProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributosDatosProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
