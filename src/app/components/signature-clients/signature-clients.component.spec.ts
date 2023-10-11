import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureClientsComponent } from './signature-clients.component';

describe('SignatureClientsComponent', () => {
  let component: SignatureClientsComponent;
  let fixture: ComponentFixture<SignatureClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
