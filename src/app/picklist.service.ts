import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PICKLIST } from 'src/config/url' 

export enum PickLists {
  KNOWLEDGE_TYPE = '5bc2729c7f7a7c9d22fb019f',
  KNOWLEDGE_KEYWORDS = '5bc272a87f7a7c9d22fb01a0'
}

@Injectable({
  providedIn: 'root'
})
export class PicklistService {

  constructor(private http:HttpClient) { }

  getPickList(id: PickLists) {
    return this.http.get(`${API_PICKLIST}/${id}`)
  }
}
