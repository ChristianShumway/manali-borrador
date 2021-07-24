import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { Error400Component } from './components/error400/error400.component';
import { Error403Component } from './components/error403/error403.component';
import { Error500Component } from './components/error500/error500.component';
import { Error503Component } from './components/error503/error503.component';

const routes: Routes = [
  {
    path: '',
    component: Error404Component
  },
  {
    path: 'page-error-400', 
    component: Error400Component
  },
  {
    path: 'page-error-403', 
    component: Error403Component
  },
  {
    path: 'page-error-500', 
    component: Error500Component
  },
  {
    path: 'page-error-503', 
    component: Error503Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
