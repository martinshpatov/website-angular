import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
})
export class TopheadlinesComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();
  constructor(private _services: NewsapiService) {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  topHeadlinesDisplay: any = [];
  ngOnInit(): void {
    this._services.topHeadlines().pipe(
      takeUntil(this.destroy$)
    ).subscribe((result) => {
      console.log(result);
      this.topHeadlinesDisplay = result.articles;
    });
  }
}
