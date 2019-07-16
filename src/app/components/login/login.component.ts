import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {LoginRequest} from '../../payload/login-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  connect() {
    if (this.email.value && this.password.value) {
      const credentials: LoginRequest = new LoginRequest(this.email.value, this.password.value);

      this.authenticationService.authenticate(credentials)
        .subscribe(
          response => {
            if (response.status === 200) {
              if (response.body.token) {
                localStorage.setItem('token', `${response.body.tokenType} ${response.body.token}`);
                this.router.navigate(['/job-offers']);
              }
            }
          }
        );
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
