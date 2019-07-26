import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {Address} from '../../model/address';
import {UsersService} from '../../services/users.service';
import {Category} from '../../model/category';
import {CategoriesService} from '../../services/categories.service';
import {Preference} from '../../model/preference';
import {AuthenticationService} from '../../services/authentication.service';
import {LoginRequest} from '../../payload/login-request';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  private signUpForm: FormGroup;
  private user: User;
  private categoriesAvailable: Category[];
  private countries: string[] = ['Belgique'];

  constructor(private usersService: UsersService,
              private categoriesService: CategoriesService,
              private authService: AuthenticationService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.user.address = new Address();
    this.user.preference = new Preference();
    this.user.preference.category = new Category();
    this.categoriesService.findAll().subscribe(c => this.categoriesAvailable = c);


    this.signUpForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required,
      ]],
      lastName: ['', [
        Validators.required
      ]],
      birth : ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required
      ]],
      street: ['', [
        Validators.required,
      ]],
      number: ['', [
        Validators.required,
        Validators.min(0)
      ]],
      city: ['', [
        Validators.required,
      ]],
      postalCode: ['', [
        Validators.required,
        Validators.min(1000)
      ]],
      country: [ 'Belgique' , [
        Validators.required
      ]],
      category: ['', [
        Validators.required
      ]]
    });
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }

  get birth() {
    return this.signUpForm.get('birth');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get street() {
    return this.signUpForm.get('street');
  }

  get number() {
    return this.signUpForm.get('number');
  }

  get city() {
    return this.signUpForm.get('city');
  }

  get postalCode() {
    return this.signUpForm.get('postalCode');
  }

  get country() {
    return this.signUpForm.get('country');
  }

  get category() {
    return this.signUpForm.get('category');
  }

  signUp() {
    this.usersService.signUp(this.user).subscribe(() => {
      this.authService.authenticate(new LoginRequest(this.user.email, this.user.password))
        .subscribe(response => {
          if (response.body.token) {
            localStorage.setItem('token', `${response.body.tokenType} ${response.body.token}`);
            this.router.navigate(['/job-offers']);
          }
        });
    });
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}