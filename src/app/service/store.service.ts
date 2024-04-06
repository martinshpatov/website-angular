import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

 checkLoggedIn(isLoggedIn: boolean): void {
  this.isLoggedInSubject.next(isLoggedIn);
 }
}