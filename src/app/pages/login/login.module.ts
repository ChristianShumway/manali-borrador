import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginAdminComponent,
    RegisterComponent,
    LockScreenComponent,
    ForgotPasswordComponent
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
