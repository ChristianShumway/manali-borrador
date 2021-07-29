import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotPasswordAdminComponent } from './components/forgot-password-admin/forgot-password-admin.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { UpdatePasswordAdminComponent } from './components/update-password-admin/update-password-admin.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginAdminComponent,
    RegisterComponent,
    RegisterAdminComponent,
    LockScreenComponent,
    ForgotPasswordComponent,
    ForgotPasswordAdminComponent,
    UpdatePasswordComponent,
    UpdatePasswordAdminComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule
  ]
})
export class LoginModule { }
