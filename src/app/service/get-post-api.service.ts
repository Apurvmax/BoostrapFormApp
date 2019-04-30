import { Injectable } from '@angular/core';
import { Observable }   from 'rxjs';

import { HttpClient } from '@angular/common/http';
import {model} from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class GetPostApiService {

  constructor(public http:HttpClient) { 
    
  }

  getListData(): Observable<model[]>
  {
    return this.http.get<model[]>('https://jsonplaceholder.typicode.com/posts/')
    
  }
  
}
