import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {

  private REST_API_SERVER = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public getProfile(): Observable<any>{
    const url = `${this.REST_API_SERVER}/posts`;
    return this.httpClient
            .get<any>(url, httpOptions)
            .pipe(catchError(this.handleError));
  }

  public getComments(): Observable<any>{
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient
          .get<any>(url, httpOptions)
          .pipe(catchError(this.handleError));
  }

  public addPost(data: any){
    const url =  `${this.REST_API_SERVER}/posts`;
    return this.httpClient
          .post<any>(url,data, httpOptions)
          .pipe(catchError(this.handleError));
  }

  //get company
  public getCompany(): Observable<any>{
    const url = `${this.REST_API_SERVER}/company`;
    return this.httpClient
          .get<any>(url, httpOptions)
          .pipe(catchError(this.handleError));
  }

  //add Comapny
  public addCompany(data: any): Observable<any>{
    const url = `${this.REST_API_SERVER}/company`;
    return this.httpClient
        .post<any>(url,data, httpOptions)
        .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
