import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { MaterialModule } from './../pages/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NestableModule } from 'ngx-nestable';
import { NgxSpinnerModule } from "ngx-spinner";
import { LightboxModule } from 'ngx-lightbox';
import { CarouselModule } from 'ngx-owl-carousel-o';

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
import { NgxDropzoneModule } from 'ngx-dropzone';

import { LoadingComponent } from './components/loading/loading.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SwitcherComponent } from './components/switcher/switcher.component';


import { Graph1Component } from './components/dashboard1/graph1/graph1.component';
import { Graph2Component } from './components/dashboard1/graph2/graph2.component';
import { Graph3Component } from './components/dashboard1/graph3/graph3.component';
import { Graph4Component } from './components/dashboard1/graph4/graph4.component';
import { GraphMarketOverviewComponent } from './components/dashboard1/graph-market-overview/graph-market-overview.component';
import { WeeklyComponent } from './components/dashboard1/graph-market-overview/weekly/weekly.component';
import { MonthlyComponent } from './components/dashboard1/graph-market-overview/monthly/monthly.component';
import { YearlyComponent } from './components/dashboard1/graph-market-overview/yearly/yearly.component';
import { GraphCryptoStatisticsComponent } from './components/dashboard1/graph-crypto-statistics/graph-crypto-statistics.component';
import { QuickTransferComponent } from './components/dashboard1/quick-transfer/quick-transfer.component';
import { Das2Graph1Component } from './components/dashboard2/das2-graph1/das2-graph1.component';
import { Das2Graph2Component } from './components/dashboard2/das2-graph2/das2-graph2.component';
import { Das2Graph3Component } from './components/dashboard2/das2-graph3/das2-graph3.component';
import { GraphCoinChartComponent } from './components/dashboard2/graph-coin-chart/graph-coin-chart.component';
import { SellOrderComponent } from './components/dashboard1/sell-order/sell-order.component';
import { BuyOrderComponent } from './components/dashboard1/buy-order/buy-order.component';
import { MarketInfoComponent } from './components/dashboard2/market-info/market-info.component';
import { DashboardCrousal1Component } from './components/dashboard2/dashboard-crousal1/dashboard-crousal1.component';
import { Das2QuickTransferComponent } from './components/dashboard2/das2-quick-transfer/das2-quick-transfer.component';
import { BuySellFormComponent } from './components/dashboard3/buy-sell-form/buy-sell-form.component';
import { Das3Graph1Component } from './components/dashboard3/das3-graph1/das3-graph1.component';
import { Das2SellOrderComponent } from './components/dashboard2/das2-sell-order/das2-sell-order.component';
import { Das2BuyOrderComponent } from './components/dashboard2/das2-buy-order/das2-buy-order.component';

import { UserStatisticsComponent } from './components/profile/user-statistics/user-statistics.component';
import { InterestComponent } from './components/profile/interest/interest.component';
import { LatestNewsComponent } from './components/profile/latest-news/latest-news.component';
import { HighlightsComponent } from './components/profile/highlights/highlights.component';
import { AboutComponent } from './components/coin-details/about/about.component';
import { CoinDetailQuickTransferComponent } from './components/coin-details/coin-detail-quick-transfer/coin-detail-quick-transfer.component';
import { CardSliderComponent } from './components/my-wallets/card-slider/card-slider.component';
import { CardDetailsComponent } from './components/my-wallets/card-details/card-details.component';
import { GraphMainLimitComponent } from './components/my-wallets/card-details/graph-main-limit/graph-main-limit.component';
import { GraphSecondsComponent } from './components/my-wallets/card-details/graph-seconds/graph-seconds.component';
import { GraphOthersComponent } from './components/my-wallets/card-details/graph-others/graph-others.component';
import { DetailPieChartComponent } from './components/my-wallets/card-details/detail-pie-chart/detail-pie-chart.component';
import { WalletCoinChartComponent } from './components/my-wallets/wallet-coin-chart/wallet-coin-chart.component';
import { WalletActivityComponent } from './components/my-wallets/wallet-activity/wallet-activity.component';
import { MyProfileComponent } from './components/portofolio/my-profile/my-profile.component';
import { CoinHoldingComponent } from './components/portofolio/coin-holding/coin-holding.component';
import { CurrentGraph1Component } from './components/portofolio/current-graph1/current-graph1.component';
import { CurrentGraph2Component } from './components/portofolio/current-graph2/current-graph2.component';

const elements = [
  LoadingComponent,
  NavHeaderComponent,
  HeaderComponent,
  NavigationComponent,
  FooterComponent,
  SwitcherComponent,
  Graph1Component,
  Graph2Component,
  Graph3Component,
  Graph4Component,
  GraphMarketOverviewComponent,
  WeeklyComponent,
  MonthlyComponent,
  YearlyComponent,
  GraphCryptoStatisticsComponent,
  QuickTransferComponent,
  Das2Graph1Component,
  Das2Graph2Component,
  Das2Graph3Component,
  GraphCoinChartComponent,
  SellOrderComponent,
  BuyOrderComponent,
  MarketInfoComponent,
  DashboardCrousal1Component,
  Das2QuickTransferComponent,
  BuySellFormComponent,
  Das3Graph1Component,
  Das2BuyOrderComponent,
  Das2SellOrderComponent,
  UserStatisticsComponent,
  InterestComponent,
  LatestNewsComponent,
  HighlightsComponent,
  AboutComponent,
  CoinDetailQuickTransferComponent,
  CardSliderComponent,
  CardDetailsComponent,
  GraphMainLimitComponent,
  GraphSecondsComponent,
  GraphOthersComponent,
  DetailPieChartComponent,
  WalletCoinChartComponent,
  WalletActivityComponent,
  MyProfileComponent,
  CoinHoldingComponent,
  CurrentGraph1Component,
  CurrentGraph2Component,
];

@NgModule({
  declarations: [
    elements
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgApexchartsModule,
    NestableModule,
    NgxSpinnerModule,
    LightboxModule,
    PerfectScrollbarModule,
    MaterialModule,
    CarouselModule,
    FullCalendarModule,
    MetismenuAngularModule,
    NgxDropzoneModule,
  ],
  exports: [
   elements
  ]
})
export class SharedModule { }
