import { Component } from '@angular/core';
import { UserService } from '../user.service.ts';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private userService: UserService) {}

  login(): void {
    if (this.userService.login(this.username, this.password)) {
      // Redirect to a secure page or perform any other action upon successful login
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }
}
