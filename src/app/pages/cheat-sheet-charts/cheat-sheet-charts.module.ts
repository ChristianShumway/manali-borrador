import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

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


import { CheatSheetChartsRoutingModule } from './cheat-sheet-charts.routing.module';

import { ApexComponent } from './components/apex/apex.component';
import { LineComponent } from './components/apex/line/line.component';
import { BasicLineChartComponent } from './components/apex/line/basic-line-chart/basic-line-chart.component';
import { LineChartWithDatalabelsComponent } from './components/apex/line/line-chart-with-datalabels/line-chart-with-datalabels.component';
import { ZoomableTimeseriesComponent } from './components/apex/line/zoomable-timeseries/zoomable-timeseries.component';
import { LineWithAnnotationsComponent } from './components/apex/line/line-with-annotations/line-with-annotations.component';
import { SyncingChartsComponent } from './components/apex/line/syncing-charts/syncing-charts.component';
import { BrushChartComponent } from './components/apex/line/brush-chart/brush-chart.component';
import { SteplineChartComponent } from './components/apex/line/stepline-chart/stepline-chart.component';
import { GradientLineChartComponent } from './components/apex/line/gradient-line-chart/gradient-line-chart.component';
import { MissingOrNullValuesComponent } from './components/apex/line/missing-or-null-values/missing-or-null-values.component';
import { DashedLineChartComponent } from './components/apex/line/dashed-line-chart/dashed-line-chart.component';
import { AreaComponent } from './components/apex/area/area.component';
import { AreaBasicComponent } from './components/apex/area/area-basic/area-basic.component';
import { AreaNegativeComponent } from './components/apex/area/area-negative/area-negative.component';
import { AreaGithubStyleComponent } from './components/apex/area/area-github-style/area-github-style.component';
import { AreaSplineComponent } from './components/apex/area/area-spline/area-spline.component';
import { AreaStackedComponent } from './components/apex/area/area-stacked/area-stacked.component';
import { AreaIrregularTimeseriesComponent } from './components/apex/area/area-irregular-timeseries/area-irregular-timeseries.component';
import { AreaMissingOrNullValuesComponent } from './components/apex/area/area-missing-or-null-values/area-missing-or-null-values.component';
import { ColumnComponent } from './components/apex/column/column.component';
import { ColumnBasicComponent } from './components/apex/column/column-basic/column-basic.component';
import { ColumnDataLabelsComponent } from './components/apex/column/column-data-labels/column-data-labels.component';
import { ColumnStackedComponent } from './components/apex/column/column-stacked/column-stacked.component';
import { ColumnStacked100Component } from './components/apex/column/column-stacked100/column-stacked100.component';
import { ColumnRotatedLabelsComponent } from './components/apex/column/column-rotated-labels/column-rotated-labels.component';
import { ColumnNegativeValuesComponent } from './components/apex/column/column-negative-values/column-negative-values.component';
import { ColumnLoadedChartComponent } from './components/apex/column/column-loaded-chart/column-loaded-chart.component';
import { ColumnDistributedComponent } from './components/apex/column/column-distributed/column-distributed.component';
import { ColumnRangeComponent } from './components/apex/column/column-range/column-range.component';
import { BarComponent } from './components/apex/bar/bar.component';
import { BarBasicComponent } from './components/apex/bar/bar-basic/bar-basic.component';
import { BarGroupedComponent } from './components/apex/bar/bar-grouped/bar-grouped.component';
import { BarStackedComponent } from './components/apex/bar/bar-stacked/bar-stacked.component';
import { BarStacked100Component } from './components/apex/bar/bar-stacked100/bar-stacked100.component';
import { BarNegativeValuesComponent } from './components/apex/bar/bar-negative-values/bar-negative-values.component';
import { BarReversedComponent } from './components/apex/bar/bar-reversed/bar-reversed.component';
import { BarCustomDataLabelsComponent } from './components/apex/bar/bar-custom-data-labels/bar-custom-data-labels.component';
import { BarPatternedComponent } from './components/apex/bar/bar-patterned/bar-patterned.component';
import { BarImagesComponent } from './components/apex/bar/bar-images/bar-images.component';
import { MixedComponent } from './components/apex/mixed/mixed.component';
import { MixedLineColumnComponent } from './components/apex/mixed/mixed-line-column/mixed-line-column.component';
import { MixedMultipleYAxisComponent } from './components/apex/mixed/mixed-multiple-y-axis/mixed-multiple-y-axis.component';
import { MixedLineAreaComponent } from './components/apex/mixed/mixed-line-area/mixed-line-area.component';
import { MixedLineColumnAreaComponent } from './components/apex/mixed/mixed-line-column-area/mixed-line-column-area.component';
import { TimelineComponent } from './components/apex/timeline/timeline.component';
import { TimelineBasicComponent } from './components/apex/timeline/timeline-basic/timeline-basic.component';
import { TimelineDistributedComponent } from './components/apex/timeline/timeline-distributed/timeline-distributed.component';
import { TimelineMultiSeriesComponent } from './components/apex/timeline/timeline-multi-series/timeline-multi-series.component';
import { TimelineAdvancedComponent } from './components/apex/timeline/timeline-advanced/timeline-advanced.component';
import { TimelineMultipleSeriesComponent } from './components/apex/timeline/timeline-multiple-series/timeline-multiple-series.component';
import { CandlestickComponent } from './components/apex/candlestick/candlestick.component';
import { CandlestickBasicComponent } from './components/apex/candlestick/candlestick-basic/candlestick-basic.component';
import { CandlestickComboComponent } from './components/apex/candlestick/candlestick-combo/candlestick-combo.component';
import { CandlestickCategoryComponent } from './components/apex/candlestick/candlestick-category/candlestick-category.component';
import { CandlestickLineComponent } from './components/apex/candlestick/candlestick-line/candlestick-line.component';
import { PieComponent } from './components/apex/pie/pie.component';
import { PieSimpleComponent } from './components/apex/pie/pie-simple/pie-simple.component';
import { PieDonutComponent } from './components/apex/pie/pie-donut/pie-donut.component';
import { PieMonochromeComponent } from './components/apex/pie/pie-monochrome/pie-monochrome.component';
import { PieGradientDonutComponent } from './components/apex/pie/pie-gradient-donut/pie-gradient-donut.component';
import { SemiDonutComponent } from './components/apex/pie/semi-donut/semi-donut.component';
import { DonutWithPatternComponent } from './components/apex/pie/donut-with-pattern/donut-with-pattern.component';
import { RadarComponent } from './components/apex/radar/radar.component';
import { RadarBasicComponent } from './components/apex/radar/radar-basic/radar-basic.component';
import { RadarMultipleSeriesComponent } from './components/apex/radar/radar-multiple-series/radar-multiple-series.component';
import { RadialbarComponent } from './components/apex/radialbar/radialbar.component';
import { RadialbarBasicComponent } from './components/apex/radialbar/radialbar-basic/radialbar-basic.component';
import { RadialbarMultipleComponent } from './components/apex/radialbar/radialbar-multiple/radialbar-multiple.component';
import { RadialbarCustomAngleCircleComponent } from './components/apex/radialbar/radialbar-custom-angle-circle/radialbar-custom-angle-circle.component';
import { RadialbarGradientComponent } from './components/apex/radialbar/radialbar-gradient/radialbar-gradient.component';
import { RadialbarStrokedAngularGaugeComponent } from './components/apex/radialbar/radialbar-stroked-angular-gauge/radialbar-stroked-angular-gauge.component';
import { RadialbarSemiCircleGaugeComponent } from './components/apex/radialbar/radialbar-semi-circle-gauge/radialbar-semi-circle-gauge.component';
import { PolarAreaComponent } from './components/apex/polar-area/polar-area.component';
import { PolarAreaBasicComponent } from './components/apex/polar-area/polar-area-basic/polar-area-basic.component';
import { PolarAreaMonochromeComponent } from './components/apex/polar-area/polar-area-monochrome/polar-area-monochrome.component';
import { BubbleComponent } from './components/apex/bubble/bubble.component';
import { BubbleSimpleComponent } from './components/apex/bubble/bubble-simple/bubble-simple.component';
import { Bubble3DComponent } from './components/apex/bubble/bubble3-d/bubble3-d.component';
import { ScatterComponent } from './components/apex/scatter/scatter.component';
import { ScatterBasicComponent } from './components/apex/scatter/scatter-basic/scatter-basic.component';
import { ScatterDatetimeComponent } from './components/apex/scatter/scatter-datetime/scatter-datetime.component';
import { ScatterImagesComponent } from './components/apex/scatter/scatter-images/scatter-images.component';
import { HeatmapComponent } from './components/apex/heatmap/heatmap.component';
import { HeatmapBasicComponent } from './components/apex/heatmap/heatmap-basic/heatmap-basic.component';
import { HeatmapMultipleColorsComponent } from './components/apex/heatmap/heatmap-multiple-colors/heatmap-multiple-colors.component';
import { HeatmapMultipleFlippedComponent } from './components/apex/heatmap/heatmap-multiple-flipped/heatmap-multiple-flipped.component';
import { HeatmapColorRangeComponent } from './components/apex/heatmap/heatmap-color-range/heatmap-color-range.component';
import { HeatmapRoundedComponent } from './components/apex/heatmap/heatmap-rounded/heatmap-rounded.component';
import { TreemapComponent } from './components/apex/treemap/treemap.component';
import { TreemapBasicComponent } from './components/apex/treemap/treemap-basic/treemap-basic.component';
import { TreemapMultipleSeriesComponent } from './components/apex/treemap/treemap-multiple-series/treemap-multiple-series.component';
import { TreemapColorRangeComponent } from './components/apex/treemap/treemap-color-range/treemap-color-range.component';
import { TreemapDistributedComponent } from './components/apex/treemap/treemap-distributed/treemap-distributed.component';
import { SparklinesComponent } from './components/apex/sparklines/sparklines.component';
import { SparklinesBasicComponent } from './components/apex/sparklines/sparklines-basic/sparklines-basic.component';
import { ChartjsComponent } from './components/chartjs/chartjs.component';
import { ChartjsLineComponent } from './components/chartjs/chartjs-line/chartjs-line.component';
import { ChartjsBarComponent } from './components/chartjs/chartjs-bar/chartjs-bar.component';
import { ChartjsDoughnutComponent } from './components/chartjs/chartjs-doughnut/chartjs-doughnut.component';
import { ChartjsRadarComponent } from './components/chartjs/chartjs-radar/chartjs-radar.component';
import { ChartjsPieComponent } from './components/chartjs/chartjs-pie/chartjs-pie.component';
import { ChartjsBubbleComponent } from './components/chartjs/chartjs-bubble/chartjs-bubble.component';


@NgModule({
  declarations: [
    ApexComponent,
    LineComponent,
    BasicLineChartComponent,
    LineChartWithDatalabelsComponent,
    ZoomableTimeseriesComponent,
    LineWithAnnotationsComponent,
    SyncingChartsComponent,
    BrushChartComponent,
    SteplineChartComponent,
    GradientLineChartComponent,
    MissingOrNullValuesComponent,
    DashedLineChartComponent,
    AreaComponent,
    AreaBasicComponent,
    AreaNegativeComponent,
    AreaGithubStyleComponent,
    AreaSplineComponent,
    AreaStackedComponent,
    AreaIrregularTimeseriesComponent,
    AreaMissingOrNullValuesComponent,
    ColumnComponent,
    ColumnBasicComponent,
    ColumnDataLabelsComponent,
    ColumnStackedComponent,
    ColumnStacked100Component,
    ColumnRotatedLabelsComponent,
    ColumnNegativeValuesComponent,
    ColumnLoadedChartComponent,
    ColumnDistributedComponent,
    ColumnRangeComponent,
    BarComponent,
    BarBasicComponent,
    BarGroupedComponent,
    BarStackedComponent,
    BarStacked100Component,
    BarNegativeValuesComponent,
    BarReversedComponent,
    BarCustomDataLabelsComponent,
    BarPatternedComponent,
    BarImagesComponent,
    MixedComponent,
    MixedLineColumnComponent,
    MixedMultipleYAxisComponent,
    MixedLineAreaComponent,
    MixedLineColumnAreaComponent,
    TimelineComponent,
    TimelineBasicComponent,
    TimelineDistributedComponent,
    TimelineMultiSeriesComponent,
    TimelineAdvancedComponent,
    TimelineMultipleSeriesComponent,
    CandlestickComponent,
    CandlestickBasicComponent,
    CandlestickComboComponent,
    CandlestickCategoryComponent,
    CandlestickLineComponent,
    PieComponent,
    PieSimpleComponent,
    PieDonutComponent,
    PieMonochromeComponent,
    PieGradientDonutComponent,
    SemiDonutComponent,
    DonutWithPatternComponent,
    RadarComponent,
    RadarBasicComponent,
    RadarMultipleSeriesComponent,
    RadialbarComponent,
    RadialbarBasicComponent,
    RadialbarMultipleComponent,
    RadialbarCustomAngleCircleComponent,
    RadialbarGradientComponent,
    RadialbarStrokedAngularGaugeComponent,
    RadialbarSemiCircleGaugeComponent,
    PolarAreaComponent,
    PolarAreaBasicComponent,
    PolarAreaMonochromeComponent,
    BubbleComponent,
    BubbleSimpleComponent,
    Bubble3DComponent,
    ScatterComponent,
    ScatterBasicComponent,
    ScatterDatetimeComponent,
    ScatterImagesComponent,
    HeatmapComponent,
    HeatmapBasicComponent,
    HeatmapMultipleColorsComponent,
    HeatmapMultipleFlippedComponent,
    HeatmapColorRangeComponent,
    HeatmapRoundedComponent,
    TreemapComponent,
    TreemapBasicComponent,
    TreemapMultipleSeriesComponent,
    TreemapColorRangeComponent,
    TreemapDistributedComponent,
    SparklinesComponent,
    SparklinesBasicComponent,
    ChartjsComponent,
    ChartjsLineComponent,
    ChartjsBarComponent,
    ChartjsDoughnutComponent,
    ChartjsRadarComponent,
    ChartjsPieComponent,
    ChartjsBubbleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CheatSheetChartsRoutingModule,
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
  ]
})
export class CheatSheetChartsModule { }
