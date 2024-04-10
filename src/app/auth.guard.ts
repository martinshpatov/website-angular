import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { StoreService } from "./service/store.service";
import { Subject, takeUntil } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate  {
    constructor(private router: Router,   private service: StoreService) {}
    isLoggedIn: boolean = false;
    destroy$ = new Subject<void>();
    
    canActivate(): boolean {
      return this.checkAuth();
    }
  
    private checkAuth(): boolean {
    this.service.isLoggedInSubject.pipe(
         takeUntil(this.destroy$)
          )
        .subscribe(x => {
         this.isLoggedIn = x;
        });
      if (this.isLoggedIn) {
        return true;
      } else {
        // Redirect to the login page if the user is not authenticated
        this.router.navigate(['/login']);
        return false;
      }
    }
  
  }
