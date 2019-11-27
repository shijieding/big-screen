import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BmapComponent } from './bmap/bmap.component';

const routes: Routes = [
  {path:'',component:BmapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BmapRoutingModule { }
