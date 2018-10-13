import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  loginForm = this.fb.group({
    'username': [''],
    'password': ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  login(): void {

  }

}
