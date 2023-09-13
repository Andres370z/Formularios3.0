import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario11Component } from './formulario11.component';

describe('Formulario11Component', () => {
  let component: Formulario11Component;
  let fixture: ComponentFixture<Formulario11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
