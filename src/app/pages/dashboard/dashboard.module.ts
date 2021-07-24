import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NestableModule } from 'ngx-nestable';
import { NgxSpinnerModule } from "ngx-spinner";
import { LightboxModule } from 'ngx-lightbox';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

import { MetismenuAngularModule } from "@metismenu/angular";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './../../pages/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { Index1Component } from './components/index1/index1.component';
import { Index2Component } from './components/index2/index2.component';
import { Index3Component } from './components/index3/index3.component';
import { Index4Component } from './components/index4/index4.component';

import { CoinDetailsComponent } from './components//coin-details/coin-details.component';
import { MyWalletsComponent } from './components/my-wallets/my-wallets.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { PortofolioComponent } from './components/portofolio/portofolio.component';
import { MarketCapitalComponent } from './components/market-capital/market-capital.component';

@NgModule({
  declarations: [
    Index1Component,
    Index2Component,
    Index3Component,
    Index4Component,
    CoinDetailsComponent,
    MyWalletsComponent,
    TransactionsComponent,
    PortofolioComponent,
    MarketCapitalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgApexchartsModule,
    NestableModule,
    NgxSpinnerModule,
    LightboxModule,
    FullCalendarModule,
    MetismenuAngularModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    CarouselModule,
    MaterialModule,
    SharedModule
  ]
})
export class DashboardModule { }
