import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario12Component } from './formulario12.component';

describe('Formulario12Component', () => {
  let component: Formulario12Component;
  let fixture: ComponentFixture<Formulario12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
