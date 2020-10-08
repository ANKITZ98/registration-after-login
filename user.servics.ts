import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private baseUrl = 'http://ecollect.myaastha.in/ecollectapidev/api';//Dev API
  constructor(private http:HttpClient) { }
  getUser():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }
}
