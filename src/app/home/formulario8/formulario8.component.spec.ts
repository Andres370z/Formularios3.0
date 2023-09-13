import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario8Component } from './formulario8.component';

describe('Formulario8Component', () => {
  let component: Formulario8Component;
  let fixture: ComponentFixture<Formulario8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
