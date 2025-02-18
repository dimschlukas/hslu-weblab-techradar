import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Technology } from '../../../models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  url = environment.backendUrl + '/technologies';

  constructor(private http: HttpClient) {}

  getTechnologies(params = {}): Observable<Technology[]> {
    return this.http
      .get<Technology[]>(this.url, {
        params,
        withCredentials: true
      })
      .pipe(catchError(this.handleError));
  }

  addTechnology(technology: Technology): Observable<Technology> {
    return this.http
      .post<Technology>(this.url, technology, {
        withCredentials: true
      })
      .pipe(catchError(this.handleError));
  }

  updateTechnology(technology: Technology): Observable<Technology> {
    return this.http
      .put<Technology>(`${this.url}/${technology._id}`, technology, {
        withCredentials: true
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Something went wrong. Please try again later.';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client-side error:', error.error.message);
      errorMessage = error.error.message;
    } else {
      // Server-side error
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
      errorMessage = error.error?.message || `Error Code: ${error.status}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
