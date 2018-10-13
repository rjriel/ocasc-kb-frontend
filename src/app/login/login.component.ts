import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    'username': ['', Validators.required],
    'password': ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
  }

  login(): void {
    this.loginService.login(this.loginForm.value);
  }

}
