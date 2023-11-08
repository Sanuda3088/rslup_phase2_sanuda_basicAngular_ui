import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Dummy user data for testing
  private users = [
    { username: 'user1', password: 'password1', name: 'User One' },
    { username: 'user2', password: 'password2', name: 'User Two' }
  ];

  private currentUser: any; // Store the currently logged-in user

  constructor() { }

  // Login function
  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  // Logout function
  logout(): void {
    this.currentUser = null;
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
