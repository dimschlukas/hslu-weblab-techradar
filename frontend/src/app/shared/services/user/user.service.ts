import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { environment } from '../../../../environment/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.backendUrl + '/users';

  constructor(private http: HttpClient) {}

  getPendingUsersRequests(): Observable<User[]> {
    const params = { role: '' };
    return this.http
      .get<User[]>(this.url, {
        params
      })
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user._id}`, user).pipe(catchError(this.handleError));
  }

  deleteUser(user: User): Observable<User> {
    return this.http.delete<User>(`${this.url}/${user._id}`).pipe(catchError(this.handleError));
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
