import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NestableComponent } from './components/nestable/nestable.component';
import { LightGalleryComponent } from './components/light-gallery/light-gallery.component';

const routes: Routes = [     
  {
    path: 'uc-nestable', 
    component: NestableComponent
  },
  {
    path: 'uc-lightgallery', 
    component: LightGalleryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsRoutingModule { }
