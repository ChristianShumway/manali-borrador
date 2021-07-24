import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { WidgetRoutingModule } from './widget-routing.module';
import { MaterialModule } from './../material/material.module';
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

import { WidgetComponent } from './components/widget/widget.component';
import { Timeline1Component } from './components/timeline1/timeline1.component';
import { Timeline2Component } from './components/timeline2/timeline2.component';
import { Notifications1Component } from './components/notifications1/notifications1.component';
import { Notifications2Component } from './components/notifications2/notifications2.component';
import { MessageComponent } from './components/message/message.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { PieChart1Component } from './components/charts/pie-chart1/pie-chart1.component';
import { BarChart1Component } from './components/charts/bar-chart1/bar-chart1.component';
import { BarChart2Component } from './components/charts/bar-chart2/bar-chart2.component';
import { AreaChart1Component } from './components/charts/area-chart1/area-chart1.component';
import { VisitorActivityComponent } from './components/visitor-activity/visitor-activity.component';
import { VisitorActivityDayComponent } from './components/visitor-activity/visitor-activity-day/visitor-activity-day.component';
import { VisitorActivityMonthComponent } from './components/visitor-activity/visitor-activity-month/visitor-activity-month.component';
import { VisitorActivityYearComponent } from './components/visitor-activity/visitor-activity-year/visitor-activity-year.component';
import { ChartjsActiveUsersComponent } from './components/charts/chartjs-active-users/chartjs-active-users.component';
import { BloodPressureComponent } from './components/charts/blood-pressure/blood-pressure.component';
import { HeartRateComponent } from './components/charts/heart-rate/heart-rate.component';
import { GlucoseRateComponent } from './components/charts/glucose-rate/glucose-rate.component';
import { ClolesterolComponent } from './components/charts/clolesterol/clolesterol.component';
import { BarChart3Component } from './components/charts/bar-chart3/bar-chart3.component';
import { AreaChart2Component } from './components/charts/area-chart2/area-chart2.component';
import { MarketNowComponent } from './components/charts/market-now/market-now.component';
import { BarChart6Component } from './components/charts/bar-chart6/bar-chart6.component';
import { AreaChart3Component } from './components/charts/area-chart3/area-chart3.component';
import { BarChart5Component } from './components/charts/bar-chart5/bar-chart5.component';
import { BarChart4Component } from './components/charts/bar-chart4/bar-chart4.component';
import { SalesAnalysisComponent } from './components//charts/sales-analysis/sales-analysis.component';
import { TopProducts1Component } from './components//charts/top-products1/top-products1.component';
import { TopProducts2Component } from './components//charts/top-products2/top-products2.component';
import { WeeklySalesComponent } from './components//charts/weekly-sales/weekly-sales.component';
import { SalesStatusComponent } from './components//charts/sales-status/sales-status.component';
import { AllSales1Component } from './components//charts/all-sales1/all-sales1.component';
import { AllSales2Component } from './components//charts/all-sales2/all-sales2.component';

@NgModule({
  declarations: [
    WidgetComponent,
    Timeline1Component,
    Timeline2Component,
    Notifications1Component,
    Notifications2Component,
    MessageComponent,
    TodolistComponent,
    PieChart1Component,
    BarChart1Component,
    BarChart2Component,
    AreaChart1Component,
    VisitorActivityComponent,
    VisitorActivityDayComponent,
    VisitorActivityMonthComponent,
    VisitorActivityYearComponent,
    ChartjsActiveUsersComponent,
    BloodPressureComponent,
    HeartRateComponent,
    GlucoseRateComponent,
    ClolesterolComponent,
    BarChart3Component,
    AreaChart2Component,
    BarChart4Component,
    BarChart5Component,
    AreaChart3Component,
    BarChart6Component,
    MarketNowComponent,
    SalesAnalysisComponent,
    TopProducts1Component,
    TopProducts2Component,
    WeeklySalesComponent,
    SalesStatusComponent,
    AllSales1Component,
    AllSales2Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WidgetRoutingModule,
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
    MaterialModule
  ],
  exports: [
    WidgetComponent,
    Timeline1Component,
    Timeline2Component,
    Notifications1Component,
    Notifications2Component,
    MessageComponent,
    TodolistComponent,
    PieChart1Component,
    BarChart1Component,
    BarChart2Component,
    AreaChart1Component,
    VisitorActivityComponent,
    VisitorActivityDayComponent,
    VisitorActivityMonthComponent,
    VisitorActivityYearComponent,
    ChartjsActiveUsersComponent,
    BloodPressureComponent,
    HeartRateComponent,
    GlucoseRateComponent,
    ClolesterolComponent,
    BarChart3Component,
    AreaChart2Component,
    BarChart4Component,
    BarChart5Component,
    AreaChart3Component,
    BarChart6Component,
    MarketNowComponent,
    SalesAnalysisComponent,
    TopProducts1Component,
    TopProducts2Component,
    WeeklySalesComponent,
    SalesStatusComponent,
    AllSales1Component,
    AllSales2Component 
  ]
})
export class WidgetModule { }
