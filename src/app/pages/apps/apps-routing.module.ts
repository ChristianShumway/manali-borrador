import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { ComposeComponent } from './components/email/compose/compose.component';
import { InboxComponent } from './components/email/inbox/inbox.component';
import { ReadComponent } from './components/email/read/read.component';
import { CalenderComponent } from './components/calender/calender.component';
import { ProductGridComponent } from './components/shop/product-grid/product-grid.component';
import { ProductListComponent } from './components/shop/product-list/product-list.component';
import { ProductDetailComponent } from './components/shop/product-detail/product-detail.component';
import { OrderComponent } from './components/shop/order/order.component';
import { CheckoutComponent } from './components/shop/checkout/checkout.component';
import { InvoiceComponent } from './components/shop/invoice/invoice.component';
import { EcomCustomersComponent } from './components/shop/ecom-customers/ecom-customers.component';

const routes: Routes = [
  {path: 'app-profile', component: ProfileComponent},
  {path: 'post-details', component: PostDetailsComponent},
  {path: 'email-compose', component: ComposeComponent},
  {path: 'email-inbox', component: InboxComponent},
  {path: 'email-read', component: ReadComponent},
  {path: 'app-calender', component: CalenderComponent},
  {path: 'ecom-product-grid', component: ProductGridComponent},
  {path: 'ecom-product-list', component: ProductListComponent},
  {path: 'ecom-product-detail', component: ProductDetailComponent},
  {path: 'ecom-product-order', component: OrderComponent},
  {path: 'ecom-checkout', component: CheckoutComponent},
  {path: 'ecom-invoice', component: InvoiceComponent},
  {path: 'ecom-customers', component: EcomCustomersComponent},   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
