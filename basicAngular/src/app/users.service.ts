import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
}

// user.service.ts
getUsers(): Observable<User[]> {
  // Simulated API call to get user data
}

updateUser(user: User): Observable<User> {
  // Simulated API call to update user
}

deleteUser(userId: number): Observable<void> {
  // Simulated API call to delete user
}
