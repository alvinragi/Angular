import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class ResolveListService {
    private usersUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) { }
  
    getUsers(): Observable<any[]> {
      return this.http.get<any[]>(this.usersUrl);
}}
//the function will be called in authguard
