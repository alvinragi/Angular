import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FirstapiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('https://localhost:7160/api/ForumStatus');
  }
}
