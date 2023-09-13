import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario5Component } from './formulario5.component';

describe('Formulario5Component', () => {
  let component: Formulario5Component;
  let fixture: ComponentFixture<Formulario5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
