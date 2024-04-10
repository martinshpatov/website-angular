import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject} from 'rxjs';
import { Unicorn } from '../models/unicorn.interface';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  isLoggedInSubject = new BehaviorSubject<boolean>(false);
  unicornStoreSubject = new BehaviorSubject<Unicorn | null>(null);

  constructor() {}

 checkLoggedIn(isLoggedIn: boolean): void {
  this.isLoggedInSubject.next(isLoggedIn);
 }

 addUnicorn(item: Unicorn) {
  this.unicornStoreSubject.next(item);
 }
}