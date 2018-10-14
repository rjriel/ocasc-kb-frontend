import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { API_LOGIN } from 'src/config/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(formGroup: FormGroup): Observable<object> {
    return this.http.post(API_LOGIN, formGroup.value);
  }
}
