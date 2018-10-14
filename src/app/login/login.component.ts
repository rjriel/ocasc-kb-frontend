import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
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

  message: string;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login(): void {
    this.loginService
      .login(this.loginForm.value)
      .subscribe(
        () => this.router.navigate(['/entries']),
        err => this.snackBar.open(err['message'], '', {
          duration: 500
        })
      );
  }

}
