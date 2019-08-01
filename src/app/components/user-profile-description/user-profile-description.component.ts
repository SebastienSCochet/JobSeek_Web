import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/user";

@Component({
  selector: 'app-user-profile-description',
  templateUrl: './user-profile-description.component.html',
  styleUrls: ['./user-profile-description.component.scss']
})
export class UserProfileDescriptionComponent implements OnInit {

  @Input() private user: User;

  constructor() { }

  ngOnInit() {
  }


}
