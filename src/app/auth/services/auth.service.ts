import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL= 'https://c149.ferozo.com:2092';
  constructor(private http: HttpClient) { }

  singin(user: any){
    return this.http.post(`${this.URL}/user/singin`, user);
    
  }
} 
