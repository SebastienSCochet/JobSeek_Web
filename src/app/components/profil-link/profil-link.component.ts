import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../model/user';
import {Role} from '../../model/role';

@Component({
  selector: 'app-profil-link',
  templateUrl: './profil-link.component.html',
  styleUrls: ['./profil-link.component.scss']
})
export class ProfilLinkComponent implements OnInit {
  @Input() private user: User;
  @Input() private isAdmin: boolean;

  constructor() { }

  ngOnInit() {
  }


}
