import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemDataService {
  queryUrl = 'http://localhost:8080/rest/questions/fetchUnCheckRow'
  updateUrl = 'http://localhost:8080/rest/questions/updateRow'
  constructor(private http: HttpClient) {

  }
  fetchRow(){
    return this.http.get<any>(this.queryUrl);
  }

  updateRow(data){
    return this.http.post(this.updateUrl, data);
  }
}
