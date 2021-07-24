import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApexComponent } from './components/apex/apex.component';
import { LineComponent } from './components/apex/line/line.component';
import { AreaComponent } from './components/apex/area/area.component';
import { ColumnComponent } from './components/apex/column/column.component';
import { BarComponent } from './components/apex/bar/bar.component';
import { MixedComponent } from './components/apex/mixed/mixed.component';
import { TimelineComponent } from './components/apex/timeline/timeline.component';
import { CandlestickComponent } from './components/apex/candlestick/candlestick.component';
import { PieComponent } from './components/apex/pie/pie.component';
import { RadarComponent } from './components/apex/radar/radar.component';
import { RadialbarComponent } from './components/apex/radialbar/radialbar.component';
import { PolarAreaComponent } from './components/apex/polar-area/polar-area.component';
import { BubbleComponent } from './components/apex/bubble/bubble.component';
import { ScatterComponent } from './components/apex/scatter/scatter.component';
import { HeatmapComponent } from './components/apex/heatmap/heatmap.component';
import { TreemapComponent } from './components/apex/treemap/treemap.component';
import { SparklinesComponent } from './components/apex/sparklines/sparklines.component';
import { ChartjsComponent } from './components/chartjs/chartjs.component';

const routes: Routes = [
  {path: 'chart-apex', component: ApexComponent},
  {path: 'apex-line', component: LineComponent},
  {path: 'apex-area', component: AreaComponent},
  {path: 'apex-column', component: ColumnComponent},
  {path: 'apex-bar', component: BarComponent},
  {path: 'apex-mixed', component: MixedComponent},
  {path: 'apex-timeline', component: TimelineComponent},
  {path: 'apex-candlestick', component: CandlestickComponent},
  {path: 'apex-pie', component: PieComponent},
  {path: 'apex-radar', component: RadarComponent},
  {path: 'apex-radialbar', component: RadialbarComponent},
  {path: 'apex-polar-area', component: PolarAreaComponent},
  {path: 'apex-bubble', component: BubbleComponent},
  {path: 'apex-scatter', component: ScatterComponent},
  {path: 'apex-heatmap', component: HeatmapComponent},
  {path: 'apex-treemap', component: TreemapComponent},
  {path: 'apex-sparklines', component: SparklinesComponent},
  {path: 'chart-chartjs', component: ChartjsComponent},     
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheatSheetChartsRoutingModule { }
