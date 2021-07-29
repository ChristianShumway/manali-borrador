import { RegisterAdminComponent } from './components/register-admin/register-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { ForgotPasswordAdminComponent } from './components/forgot-password-admin/forgot-password-admin.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { UpdatePasswordAdminComponent } from './components/update-password-admin/update-password-admin.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'crear-cuenta', 
    component: RegisterComponent
  },
  {path: 
    'bloquear', 
    component: LockScreenComponent
  },
  {
    path: 'recordar-contrasena', 
    component: ForgotPasswordComponent
  },
  {
    path: 'actualizar-contrasena', 
    component: UpdatePasswordComponent
  },
  {
    path: 'admin', 
    component: LoginAdminComponent,
  },
  {
    path: 'admin/crear-cuenta',
    component: RegisterAdminComponent
  },
  {
    path: 'admin/recordar-contrasena',
    component: ForgotPasswordAdminComponent
  },
  {
    path: 'admin/actualizar-contrasena', 
    component: UpdatePasswordAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
