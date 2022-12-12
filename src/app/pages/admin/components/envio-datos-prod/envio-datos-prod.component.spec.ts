import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioDatosProdComponent } from './envio-datos-prod.component';

describe('EnvioDatosProdComponent', () => {
  let component: EnvioDatosProdComponent;
  let fixture: ComponentFixture<EnvioDatosProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioDatosProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioDatosProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
