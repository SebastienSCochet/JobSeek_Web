import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-profil-description',
  templateUrl: './user-profil-description.component.html',
  styleUrls: ['./user-profil-description.component.scss']
})
export class UserProfilDescriptionComponent implements OnInit {
  @Input() private user: User;

  constructor() { }

  ngOnInit() {
  }

}
