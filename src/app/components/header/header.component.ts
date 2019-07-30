import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/user';
import {UsersService} from '../../services/users.service';
import {Role} from '../../model/role';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() private title: string;
  private user: User;
  private isAdmin: boolean;

  constructor(private location: Location,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.retrieveUser();
  }

  retrieveUser() {
    this.usersService.getConnectedUser().subscribe(user => {
      this.user = user;
      if (this.user) {
        this.isAdmin = this.user.role === Role.ADMIN;
      }
    });
  }

  check(viewLocation) {
    return viewLocation === this.location.path();
  }
}
