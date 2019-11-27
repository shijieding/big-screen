import { LoadingService } from './../loading/loading.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptService implements HttpInterceptor {

  constructor(
    public Router:Router,
    public LoadingService:LoadingService
  ) { }

  intercept (req: HttpRequest<any>, next:HttpHandler):any {
    const url = 'http://wpd.znswsse.com/s/product/';
    let token = '';

    if (localStorage.getItem('token')) {
      token = localStorage.getItem('token');
    }

    req = req.clone({
      url: url + req.url,
      headers: req.headers.set("Authorization", token)
    })

    if (req.url.substring(req.url.length - 13) != 'loading=false') { //loading的请求
      this.LoadingService.loading(true)
    }

    return next.handle(req).pipe(mergeMap((event: any) => { //请求成功
      this.LoadingService.loading(false)
      if (event instanceof HttpResponse && event.status != 200) { //不是200的请求
        return ErrorObservable.create(event);
      }

      return Observable.create(observer => {
        if (event.body) {
          console.log(event.body)
        }

        observer.next(event)
      })
    }),
    catchError((res:HttpResponse<any>) => {  //请求失败
      this.LoadingService.loading(false)
      return ErrorObservable.create(event)
    }))
  }
}
