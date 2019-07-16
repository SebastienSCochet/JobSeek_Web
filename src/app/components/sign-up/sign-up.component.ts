import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../model/user';
import {Address} from '../../model/address';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  private signUpForm: FormGroup;
  private user: User;

  constructor(private usersService: UsersService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.user.address = new Address();

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
        Validators.required
      ]],
      city: ['', [
        Validators.required,
      ]],
      postalCode: ['', [
        Validators.required
      ]],
      country: ['', [
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

  signUp() {
    this.usersService.signUp(this.user).subscribe(() => console.log('hello'));
  }
}
