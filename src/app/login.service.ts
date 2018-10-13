import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { API_LOGIN } from 'src/config/url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(formGroup: FormGroup): void {
    this.http.post(API_LOGIN, formGroup.value);
  }
}
