import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsRoutingModule } from './apps-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './../../pages/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgxDropzoneModule } from 'ngx-dropzone';

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


@NgModule({
  declarations: [
    ProfileComponent,
    PostDetailsComponent,
    ComposeComponent,
    InboxComponent,
    ReadComponent,
    CalenderComponent,
    ProductGridComponent,
    ProductListComponent,
    ProductDetailComponent,
    OrderComponent,
    CheckoutComponent,
    InvoiceComponent,
    EcomCustomersComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    SharedModule,
    MaterialModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule
  ]
})
export class AppsModule { }
