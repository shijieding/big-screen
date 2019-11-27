import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.styl']
})
export class LoadingComponent implements OnInit {

  public loading:boolean = false;

  constructor(
    private LoadingService:LoadingService
  ) { }

  ngOnInit() {
    this.LoadingService.getLoading().subscribe(loading => {
      this.loading = loading
    })
  }

}
