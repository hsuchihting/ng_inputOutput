import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  apiUrl: string = environment.apiUrl;
  constructor(private _http: HttpClient) {}

  getData():Observable<any>{
    return this._http.get(`${this.apiUrl}/data`)
  }

  getList():Observable<any>{
    return this._http.get(`${this.apiUrl}/list`)
  }
}
