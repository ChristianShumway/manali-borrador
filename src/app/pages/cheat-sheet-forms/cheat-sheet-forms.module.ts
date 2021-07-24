import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { CheatSheatMaterialModuleRoutingModule } from './cheat-sheet-forms-routing.module';
import { ElementsComponent } from './components/elements/elements.component';
import { FormValidateComponent } from './components/form-validate/form-validate.component';


@NgModule({
  declarations: [
    ElementsComponent,
    FormValidateComponent,
  ],
  imports: [
    CommonModule,
    CheatSheatMaterialModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class CheatSheatFormsModule { }
