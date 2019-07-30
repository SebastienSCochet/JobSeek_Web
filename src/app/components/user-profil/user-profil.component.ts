import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UsersService} from '../../services/users.service';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {
  private user: User;
  private option: string;

  constructor(private usersService: UsersService,
              private router: Router,
              private authService: AuthenticationService) { }

  ngOnInit() {
    this.usersService.getConnectedUser().subscribe(user => this.user = user);
  }

  disconnect() {
    this.authService.disconnect();
    this.router.navigate(['/login']);
  }
}
