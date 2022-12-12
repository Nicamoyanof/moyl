import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductosComponent } from './new-productos.component';

describe('NewProductosComponent', () => {
  let component: NewProductosComponent;
  let fixture: ComponentFixture<NewProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
