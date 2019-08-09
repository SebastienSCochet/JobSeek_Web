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
  option: string; // 'avatar' or 'information' according to the selected tab
  avatarUrl: string;

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private imagesService: ImagesService) { }

  /**
   * Set the option value based on the navigation path
   * Set the user's avatar
   */
  ngOnInit() {
    this.option = this.route.snapshot.paramMap.get('option');
    this.usersService.getConnectedUser().subscribe(user => {
      this.user = user;
      this.imagesService.getDownloadFromStorage(user.avatarUrl).subscribe(url => this.avatarUrl = url);
    });
  }

  /**
   * Navigate to the path then update the option value with the specified one in the path
   * Option correspond to the profile section
   */
  changeRoute(path: string) {
    this.router.navigate([path]).then(() => this.option = this.route.snapshot.paramMap.get('option'));
  }

  /**
   * Disconnect the user then redirect to login (triggered by button)
   */
  disconnect() {
    this.authService.disconnect();
    this.router.navigate(['/login']);
  }

  /**
   * Update the user (triggered when the child component confirm the user data form)
   * @param user to update
   */
  update(user: User) {
    this.usersService.update(user).subscribe(u => this.user = u);
  }

  /**
   * Update the avatar url with the specified one (Triggered when user change avatar in child component)
   */
  changeAvatar($event) {
    this.avatarUrl = $event;
  }

}
