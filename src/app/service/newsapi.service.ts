import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Unicorn } from '../models/unicorn.interface';
@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=f6ea3841aa8a4a62a849552a27bf1127';

  topHeadlines(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  getUnicorn(id: any): Observable<any> {
    return this._http.get('https://crudcrud.com/api/1b6df656745347c7b10706169028d452/unicorns/' + id);
  }

  updateUnicorn(id: string, item: Unicorn): Observable<any> {
    const baseUrl = 'https://crudcrud.com/api/1b6df656745347c7b10706169028d452/unicorns/' + id;
    return this._http.put(baseUrl, item);
  }

  createUnicorn(item: Unicorn): Observable<any> {
    return this._http.post('https://crudcrud.com/api/1b6df656745347c7b10706169028d452/unicorns/', item);
  }

  getUnicorns(): Observable<any> {
    return this._http.get('https://crudcrud.com/api/1b6df656745347c7b10706169028d452/unicorns');
  }
}
