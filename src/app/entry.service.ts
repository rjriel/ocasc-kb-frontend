import { API_KNOWLEDGE, API_MY_KNOWLEDGE } from './../config/url';
import { EntryBrief } from './model/entry-brief';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http: HttpClient) { }

  fetchEntries(): Observable<EntryBrief[]> {
    return this.http.get<EntryBrief[]>(API_KNOWLEDGE);
  }

  fetchMyEntries(): Observable<EntryBrief[]> {
    return this.http.get<EntryBrief[]>(API_MY_KNOWLEDGE);
  }
}
