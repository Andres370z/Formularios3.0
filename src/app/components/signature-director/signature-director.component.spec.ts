import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureDirectorComponent } from './signature-director.component';

describe('SignatureDirectorComponent', () => {
  let component: SignatureDirectorComponent;
  let fixture: ComponentFixture<SignatureDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
