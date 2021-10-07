import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface SignupResponse {
  username: string;
}
interface SignedInResponse {
  authenticated: boolean;
  username: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://api.angular-email.com/auth/';
  signedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(`${this.baseUrl}username`, {
      username,
    });
  }

  signUp(credentials: SignupCredentials) {
    return this.http
      .post<SignupResponse>(`${this.baseUrl}signup`, credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  checkAuth() {
    return this.http.get<SignedInResponse>(`${this.baseUrl}signedin`).pipe(
      tap(({ authenticated }) => {
        this.signedIn$.next(authenticated);
      })
    );
  }

  signOut() {
    return this.http.post(`${this.baseUrl}signOut`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }
}
