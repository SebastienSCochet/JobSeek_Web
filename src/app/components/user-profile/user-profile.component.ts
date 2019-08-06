import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {ImagesService} from '../../services/images.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User;
  option: string; // avatar or information according to the selected tab
  avatarUrl: string;

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private imagesService: ImagesService) { }

  ngOnInit() {
    this.option = this.route.snapshot.paramMap.get('option');
    this.usersService.getConnectedUser().subscribe(user => {
      this.user = user;
      this.imagesService.getDownloadFromStorage(user.avatarUrl).subscribe(url => this.avatarUrl = url);
    });
  }

  changeRoute(path: string) {
    this.router.navigate([path]).then(() => this.option = this.route.snapshot.paramMap.get('option'));
  }

  disconnect() {
    this.authService.disconnect();
    this.router.navigate(['/login']);
  }

  update(user: User) {
    this.usersService.update(this.user.idUser, user).subscribe(u => this.user = u);
  }

  changeAvatar($event) {
    this.avatarUrl = $event;
  }

}
