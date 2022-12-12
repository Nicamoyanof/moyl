import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDatosProdComponent } from './general-datos-prod.component';

describe('GeneralDatosProdComponent', () => {
  let component: GeneralDatosProdComponent;
  let fixture: ComponentFixture<GeneralDatosProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralDatosProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralDatosProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
