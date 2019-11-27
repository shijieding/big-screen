import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: 'bmap', loadChildren: () => import('./bmap/bmap.module').then(mod => mod.BmapModule) },
  { path: '', redirectTo: 'bmap', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
