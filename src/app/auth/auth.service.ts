import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'https://api.angular-email.com/auth/';
  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<{ available: boolean }>(`${this.baseUrl}username`, {
      username,
    });
  }
  signUp(credentials: any) {
    return this.http.post<any>(`${this.baseUrl}signup`, credentials);
  }
}
