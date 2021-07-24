import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '@core/services/auth/auth.guard';
import { HasUserGuard } from '@core/services/has-user/has-user.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  {
    path: 'login',
    canActivate: [HasUserGuard],
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule)
  },
	{
    path: 'admin', 
    canActivate: [AuthGuard],
    component: AdminComponent, 
    children: [
      {
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'apps',
        loadChildren: () => import('./pages/apps/apps.module').then(m => m.AppsModule)
      },
      {
        path:'charts',
        loadChildren: () => import('./pages/cheat-sheet-charts/cheat-sheet-charts.module').then(m => m.CheatSheetChartsModule)
      },
      {
        path:'bootstrap',
        loadChildren: () => import('./pages/cheat-sheet-bootstrap/cheat-sheet-bootstrap.module').then(m => m.CheatSheetBootstrapModule)
      },
      {
        path:'material',
        loadChildren: () => import('./pages/cheat-sheat-material/cheat-sheat-material.module').then(m => m.CheatSheatMaterialModule)
      },
      {
        path:'plugins',
        loadChildren: () => import('./pages/plugins/plugins.module').then(m => m.PluginsModule)
      },
      {
        path:'widget',
        loadChildren: () => import('./pages/widget/widget.module').then(m => m.WidgetModule)
      },
      {
        path:'forms',
        loadChildren: () => import('./pages/cheat-sheet-forms/cheat-sheet-forms.module').then(m => m.CheatSheatFormsModule)
      }
    ]
  },
  {
    path: '**', 
    loadChildren: () => import('./pages/errors/errors.module').then(m => m.ErrorsModule)
  },                       
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    // useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
