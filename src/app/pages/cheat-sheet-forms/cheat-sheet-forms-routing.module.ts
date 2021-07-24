import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementsComponent } from './components/elements/elements.component';
import { FormValidateComponent } from './components/form-validate/form-validate.component';

const routes: Routes = [
  {
    path: 'form-element', 
    component: ElementsComponent
  },
  {
    path: 'form-validate', 
    component: FormValidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheatSheatMaterialModuleRoutingModule { }
