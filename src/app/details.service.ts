import { API_KNOWLEDGE, API_PICKLIST } from './../config/url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from './model/details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  fetchDetails(id: string): Observable<Details> {
    return this.http.get<Details>(`${API_KNOWLEDGE}/${id}`);
  }

  fetchType(id: string): Observable<object> {
    return this.http.get<object>(`${API_PICKLIST}/${id}`);
  }
}
