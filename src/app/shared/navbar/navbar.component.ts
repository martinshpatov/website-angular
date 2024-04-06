import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { StoreService } from 'src/app/service/store.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy{
 
  isLoggedIn = false;
  destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private service: StoreService
  ) {}

  ngOnDestroy(): void {
   this.destroy$.next();
   this.destroy$.complete();
  }

  ngOnInit(): void {
   this.service.isLoggedInSubject.pipe(
    takeUntil(this.destroy$)
  )
   .subscribe(x => {
    this.isLoggedIn = x;
   });
  }

  onLogout(): void {
    this.service.isLoggedInSubject.next(false);
  }

}
