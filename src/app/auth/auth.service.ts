import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface SignupResponse {
  username: string;
}
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
  signUp(credentials: SignupCredentials) {
    return this.http.post<SignupResponse>(`${this.baseUrl}signup`, credentials);
  }
}
