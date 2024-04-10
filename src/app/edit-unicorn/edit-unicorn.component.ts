import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subject, takeUntil } from 'rxjs';
import { StoreService } from '../service/store.service';
import { NewsapiService } from '../service/newsapi.service';
import { Unicorn } from '../models/unicorn.interface';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-unicorn',
  templateUrl: './edit-unicorn.component.html'
})
export class EditUnicornComponent implements OnInit, OnDestroy {
newForm: any;
 unicorn: Unicorn | null = null;
 destroy$ = new Subject<void>();
constructor(private formBuilder: FormBuilder, private service: StoreService, private apiService: NewsapiService) {
}


ngOnInit(): void {
    this.newForm = this.formBuilder.group({
        name: new FormControl(''),
        age: new FormControl(''),
        colour: new FormControl(''),
      });
    this.service.unicornStoreSubject.pipe(
        takeUntil(this.destroy$)
      )
       .subscribe(x => {
        this.unicorn = x;
        if (this.unicorn) {
            this.newForm.patchValue(this.unicorn);
        }
       });
 }

 ngOnDestroy(): void {
    this.unicorn = null;
    this.newForm.reset();
    this.destroy$.next();
    this.destroy$.complete();
    this.service.unicornStoreSubject.next(null);
}

 update(form: any) {
    this.apiService.updateUnicorn((this.unicorn as any)._id, form.value).subscribe();
 }

 create(form: any){
  this.apiService.createUnicorn(form.value).subscribe();
 }
}