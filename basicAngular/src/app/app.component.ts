
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class LoginComponent implements OnInit {
[x: string]: any;

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['DehDhRh'],
      password: ['123456']
    });
  }

  onSubmit() {
    // TODO: Implement login functionality
  }

}

