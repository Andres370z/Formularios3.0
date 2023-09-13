import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario10Component } from './formulario10.component';

describe('Formulario10Component', () => {
  let component: Formulario10Component;
  let fixture: ComponentFixture<Formulario10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
