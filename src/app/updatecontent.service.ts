import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { API_PICKLIST } from 'src/config/url';

@Injectable({
  providedIn: 'root'
})
export class UpdatecontentService {

  constructor(private http: HttpClient) { }

  updatecontent(formGroup: FormGroup): void {
  }

}
