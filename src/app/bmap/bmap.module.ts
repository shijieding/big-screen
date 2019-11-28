import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { BmapRoutingModule } from './bmap-routing.module';
import { BmapComponent } from './bmap/bmap.component';

@NgModule({
  declarations: [BmapComponent],
  imports: [
    CommonModule,
    BmapRoutingModule,
    NgxEchartsModule
  ]
})
export class BmapModule { }
