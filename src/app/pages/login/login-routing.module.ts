import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

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
    path: 'admin', 
    component: LoginAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
