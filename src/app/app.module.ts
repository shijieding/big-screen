import { LoadingService } from './loading/loading.service';
import { HttpInterceptService } from './http/http-intercept.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LoadingService,
    {provide:HTTP_INTERCEPTORS,useClass:HttpInterceptService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
