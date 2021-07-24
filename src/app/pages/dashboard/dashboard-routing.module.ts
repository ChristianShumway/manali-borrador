import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index1Component } from './components/index1/index1.component';
import { Index2Component } from './components/index2/index2.component';
import { Index3Component } from './components/index3/index3.component';
import { Index4Component } from './components/index4/index4.component';
import { CoinDetailsComponent } from './components/coin-details/coin-details.component';
import { MyWalletsComponent } from './components/my-wallets/my-wallets.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { MarketCapitalComponent } from './components/market-capital/market-capital.component';

const routes: Routes = [
  {
    path: '', 
    component: Index1Component
  },
  {
    path: 'index', 
    component: Index1Component
  },
  {
    path: 'index-1', 
    component: Index1Component
  },
  {
    path: 'dashboard', 
    component: Index1Component
  },
  {
    path: 'index-2', 
    component: Index2Component
  },
  {
    path: 'dashboard-2', 
    component: Index2Component
  },
  {
    path: 'index-3', 
    component: Index3Component
  },
  {
    path: 'dashboard-3', 
    component: Index3Component
  },
  {
    path: 'index-4', 
    component: Index4Component
  },
  {
    path: 'dashboard-4', 
    component: Index4Component
  },
  {
    path: 'coin-details', 
    component: CoinDetailsComponent
  },
  {
    path: 'my-wallets', 
    component: MyWalletsComponent
  },
  {
    path: 'transactions', 
    component: TransactionsComponent
  },
  {
    path: 'portofolio', 
    component: PortofolioComponent
  },
  {
    path: 'market-capital', 
    component: MarketCapitalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
