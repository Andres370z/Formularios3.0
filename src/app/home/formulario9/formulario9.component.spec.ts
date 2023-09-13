import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario9Component } from './formulario9.component';

describe('Formulario9Component', () => {
  let component: Formulario9Component;
  let fixture: ComponentFixture<Formulario9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
