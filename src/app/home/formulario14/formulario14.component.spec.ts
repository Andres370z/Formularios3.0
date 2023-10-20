import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario14Component } from './formulario14.component';

describe('Formulario14Component', () => {
  let component: Formulario14Component;
  let fixture: ComponentFixture<Formulario14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
