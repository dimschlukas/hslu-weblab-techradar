import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Log, LogPage } from '../../../models/log';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  url = environment.backendUrl + '/logs';

  constructor(private http: HttpClient) {}

  getLogs(page: number = 0, limit: number = 10): Observable<LogPage> {
    const params = {
      page: page.toString(),
      limit: limit.toString()
    };

    return this.http.get<LogPage>(this.url, { params }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Something went wrong. Please try again later.';

    if (error.error instanceof ErrorEvent) {
      console.error('Client-side error:', error.error.message);
      errorMessage = error.error.message;
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
      errorMessage = error.error?.message || `Error Code: ${error.status}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
