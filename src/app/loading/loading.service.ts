import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new Subject<boolean>()

  constructor() { }

  getLoading ():Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  loading (loading:boolean) {
    this.loadingSubject.next(loading)
  }
}
