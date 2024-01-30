  import { Injectable } from '@angular/core';
  import { Observable, of } from 'rxjs';
  import { HttpClient } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })

  export class PostService {
    // id!:number;
    constructor(private http: HttpClient) { }
    apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    getData(): Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    }
    getAData(id : number):Observable<any>{
      console.log("id", id)
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
    updatePost(id: number, editedBody: string): Observable<any> { 
        const data = {
          body:editedBody
        }  
      return this.http.patch(
        `https://jsonplaceholder.typicode.com/posts//${id}`,
        data
      );
    }
  }