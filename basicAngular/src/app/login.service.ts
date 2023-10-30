// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://your-api-url/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const loginData = { username, password };
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
}
