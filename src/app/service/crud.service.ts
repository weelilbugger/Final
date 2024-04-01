import { Injectable } from '@angular/core';
import { House } from './House';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
 
export class CrudService {
 
  // Node/Express API
  REST_API: string = 'http://localhost:8000/api';
 
  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
  constructor(private httpClient: HttpClient) { }
  private houseId: any;
  // Get all houses
  GetHouses() {
    return this.httpClient.get(`${this.REST_API}`);
  }

  setHouseId(id: any): void {
    this.houseId = id;
  }

  getHouseId(): any {
    return this.houseId;
  }
  
  // Add
AddHouse(data: House): Observable<any> {
  let API_URL = `${this.REST_API}/add-house`;
  return this.httpClient.post(API_URL, data)
  .pipe(
  catchError(this.handleError)
  );
  }
 
  // Delete
DeleteHouse(id: any): Observable<any> {
  let API_URL = `${this.REST_API}/delete-house/${id}`;
  return this.httpClient.delete(API_URL, { headers: this.httpHeaders })
  .pipe(
  catchError(this.handleError)
  );
  }

  // Update
  UpdateHouse(id: any, data: House): Observable<any> {
    let API_URL = `${this.REST_API}/update-house/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      );
  }
  
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
