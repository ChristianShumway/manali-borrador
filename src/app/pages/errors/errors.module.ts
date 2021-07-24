import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { Error400Component } from './components/error400/error400.component';
import { Error403Component } from './components/error403/error403.component';
import { Error404Component } from './components/error404/error404.component';
import { Error500Component } from './components/error500/error500.component';
import { Error503Component } from './components/error503/error503.component';


@NgModule({
  declarations: [
    Error400Component,
    Error403Component,
    Error404Component,
    Error500Component,
    Error503Component,
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ],
  exports: [
    Error400Component,
    Error403Component,
    Error404Component,
    Error500Component,
    Error503Component,
  ]
})
export class ErrorsModule { }
