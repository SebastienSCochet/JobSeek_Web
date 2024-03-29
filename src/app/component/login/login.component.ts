import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';
import {LoginRequest} from '../../model/login-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  failureMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  /**
   * Init the react form
   */
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

  /**
   * Connect the user or show a message based on the response status
   */
  connect() {
    if (this.email.value && this.password.value) {
      const credentials: LoginRequest = new LoginRequest(this.email.value, this.password.value);

      this.authenticationService.authenticate(credentials)
        .subscribe(
          response => {
            if (response.body.token) {
              localStorage.setItem('token', `${response.body.tokenType} ${response.body.token}`);
              this.authenticationService.announceSuccessfulLogin();
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

  /**
   * Form input
   */

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
