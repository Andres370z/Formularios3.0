import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario13Component } from './formulario13.component';

describe('Formulario13Component', () => {
  let component: Formulario13Component;
  let fixture: ComponentFixture<Formulario13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formulario13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
