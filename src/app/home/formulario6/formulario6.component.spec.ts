import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario6Component } from './formulario6.component';

describe('Formulario6Component', () => {
  let component: Formulario6Component;
  let fixture: ComponentFixture<Formulario6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
