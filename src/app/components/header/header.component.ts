import {Component, Input, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {User} from "../../model/user";
import {UsersService} from "../../services/users.service";
import {Role} from "../../model/role";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  private actualUser: User;

  constructor(private usersService: UsersService) {
    this.usersService.getConnectedUser().subscribe(user => {
      this.actualUser = user;
    });
  }

  ngOnInit() {
  }

}
