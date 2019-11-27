import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BmapRoutingModule } from './bmap-routing.module';
import { BmapComponent } from './bmap/bmap.component';

@NgModule({
  declarations: [BmapComponent],
  imports: [
    CommonModule,
    BmapRoutingModule,
  ]
})
export class BmapModule { }
