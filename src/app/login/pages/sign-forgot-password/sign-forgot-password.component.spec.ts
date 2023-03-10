import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignForgotPasswordComponent } from './sign-forgot-password.component';

describe('SignForgotPasswordComponent', () => {
  let component: SignForgotPasswordComponent;
  let fixture: ComponentFixture<SignForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignForgotPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
