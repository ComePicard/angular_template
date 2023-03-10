import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageResetPasswordComponentComponent } from './pages/page-reset-password-component/page-reset-password-component.component';
import { SignForgotPasswordComponent } from './pages/sign-forgot-password/sign-forgot-password.component';


@NgModule({
  declarations: [
    PageSignInComponent,
    PageSignUpComponent,
    PageResetPasswordComponentComponent,
    SignForgotPasswordComponent
  ],
  exports:[
    PageSignInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
})
export class LoginModule { }
