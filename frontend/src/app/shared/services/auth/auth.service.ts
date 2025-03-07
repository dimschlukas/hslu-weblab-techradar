import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { LoginCredentials } from '../../../models/loginCredentials';
import { environment } from '../../../../environment/environment';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.backendUrl + '/auth';

  constructor(private router: Router, private http: HttpClient) {}

  login(credentials: LoginCredentials): Observable<User> {
    return this.http
      .post<HttpResponse<User>>(`${this.url}/login`, credentials, {
        observe: 'response'
      })
      .pipe(
        map((res) => {
          const token = res.headers.get('Authorization')?.split(' ')[1];
          if (token) {
            localStorage.setItem('token', token);
            return this.getPayload(token);
          }
        }),
        catchError(this.handleError)
      );
  }

  register(credentials: LoginCredentials): Observable<User> {
    return this.http
      .post<User>(`${this.url}/register`, credentials)
      .pipe(catchError(this.handleError));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null && !this.isTokenExpired(token);
  }

  isLoggedInAsAdmin(): boolean {
    const token = this.getToken();
    return token !== null && !this.isTokenExpired(token) && this.isAdmin(token);
  }

  isNotApproved(): boolean {
    const token = this.getToken();
    return token !== null && !this.isTokenExpired(token) && this.isApproved(token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isTokenExpired(token: string): boolean {
    try {
      const payload = this.getPayload(token);
      return payload.exp * 1000 < Date.now();
    } catch (e) {
      return true;
    }
  }

  private isAdmin(token: string) {
    try {
      const payload = this.getPayload(token);
      return payload.role == 'CTO' || payload.role == 'Tech Lead';
    } catch (e) {
      return false;
    }
  }

  private isApproved(token: string) {
    try {
      const payload = this.getPayload(token);
      return payload.role == 'Employee' || payload.role == 'CTO' || payload.role == 'Tech Lead';
    } catch (e) {
      return false;
    }
  }

  private getPayload(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
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
