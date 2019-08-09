import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {COUNTRIES} from '../../model/constants';

@Component({
  selector: 'app-user-profile-modification',
  templateUrl: './user-profile-modification.component.html',
  styleUrls: ['./user-profile-modification.component.scss']
})
export class UserProfileModificationComponent implements OnInit {

  personalInfoForm: FormGroup;
  @Input() user: User;
  @Output() personalInfoChange = new EventEmitter<User>();
  countries = COUNTRIES;

  constructor(private formBuilder: FormBuilder,
              private router: Router) {
  }

  /**
   * Init the form with the input user data.
   */
  ngOnInit() {
    if (this.user) {
      this.personalInfoForm = this.formBuilder.group({
        firstname: [this.user.firstname, Validators.required],
        lastname: [this.user.lastname, Validators.required],
        email: [this.user.email, [Validators.required, Validators.email]],
        password: [''],
        birth: [this.user.birth, [Validators.required]],
        street : [this.user.address.street, Validators.required],
        city: [this.user.address.city, Validators.required],
        number: [this.user.address.number, [Validators.required, Validators.min(0)]],
        postalCode: [this.user.address.postalCode, [Validators.min(1000), Validators.required]],
        country: [this.user.address.country, [Validators.required]]
      });
    }
  }

  /**
   * Set the user then send it to the parent component to be save then navigate to the profile
   */

  save() {
    this.user.firstname = this.firstname.value;
    this.user.lastname = this.lastname.value;
    this.user.email = this.email.value;
    if (this.password.value) {
      this.user.password = this.password.value;
    }
    this.user.address.street = this.street.value;
    this.user.address.number = this.number.value;
    this.user.address.city = this.city.value;
    this.user.address.postalCode = this.postalCode.value;
    this.user.address.country = this.country.value;

    this.personalInfoChange.emit(this.user);
    this.router.navigate(['/profile']);
  }

  /**
   * Form element
   */

  get firstname() {
    return this.personalInfoForm.get('firstname');
  }

  get lastname() {
    return this.personalInfoForm.get('lastname');
  }

  get email() {
    return this.personalInfoForm.get('email');
  }

  get password() {
    return this.personalInfoForm.get('password');
  }

  get birth() {
    return this.personalInfoForm.get('birth');
  }

  get city() {
    return this.personalInfoForm.get('city');
  }

  get number() {
    return this.personalInfoForm.get('number');
  }

  get postalCode() {
    return this.personalInfoForm.get('postalCode');
  }

  get street() {
    return this.personalInfoForm.get('street');
  }

  get country() {
    return this.personalInfoForm.get('country');
  }

}
