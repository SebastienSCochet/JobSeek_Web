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

  private loginForm: FormGroup;
  private failureMessage: string;

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
      console.log(this.email.value);
      console.log(this.password.value);

      const credentials: LoginRequest = new LoginRequest(this.email.value, this.password.value);

      console.log('Procédure d\'identification');
      this.authenticationService.authenticate(credentials)
        .subscribe(
          response => {
            if (response.body.token) {
              localStorage.setItem('token', `${response.body.tokenType} ${response.body.token}`);
              this.router.navigate(['/job-offers']);
            }
          }, error => {
            switch (error.status) {
              case 401 : {
                this.failureMessage = 'Identifiants incorrects.';
                break;
              }

              default : {
                this.failureMessage = `Une erreur est survenue. Veuillez réessayer plus tard.`;
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
