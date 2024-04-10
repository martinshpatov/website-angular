import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';
import { Unicorn } from '../models/unicorn.interface';
import { StoreService } from '../service/store.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit, OnDestroy{
  destroy$ = new Subject<void>();
  constructor(private _services:NewsapiService, private service: StoreService,  private router: Router) {}
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
;

  technewsDisplay:Unicorn[] = [];

  ngOnInit(): void {
    this._services.getUnicorns().pipe(
      takeUntil(this.destroy$)
    ).subscribe((result)=> {
       this.technewsDisplay = result;
      })
  }
 

  gotEditPage(id: string): void {
   this._services.getUnicorn(id).subscribe(x => {
    this.service.addUnicorn(x);
   });
   this.router.navigateByUrl('edit');
  }
}
