import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../model/user';
import {UsersService} from '../../services/users.service';
import {Role} from '../../model/role';
import {Location} from '@angular/common';
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  user: User;
  isAdmin: boolean;
  avatarUrl: string;

  constructor(private location: Location,
              private usersService: UsersService,
              private imagesService: ImagesService) {
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
      this.imagesService.getDownloadFromStorage(user.avatarUrl).subscribe(url => this.avatarUrl = url);
    });
  }

  check(viewLocation) {
    return viewLocation === this.location.path();
  }
}
