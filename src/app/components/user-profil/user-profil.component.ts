import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
  private user: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getConnectedUser().subscribe(user => this.user = user);
  }

}
