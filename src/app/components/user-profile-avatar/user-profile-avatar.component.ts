import {Component, Input, OnInit} from '@angular/core';
import {ImagesService} from '../../services/images.service';
import {User} from '../../model/user';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-user-profile-avatar',
  templateUrl: './user-profile-avatar.component.html',
  styleUrls: ['./user-profile-avatar.component.scss']
})
export class UserProfileAvatarComponent implements OnInit {
  file: File;
  @Input() user: User;
  message: string;

  constructor(private imagesService: ImagesService, private usersService: UsersService) { }

  ngOnInit() {}

  setFile(event: FileList) {
    this.file = event.item(0);
  }

  startUpload() {
    if (this.file) {
      if (this.file.type.split('/')[0] !== 'image') {
        alert('Le type de fichier ne correspond pas.');
        return;
      }

      const path = `avatar/${this.user.idUser}.${this.file.type.split('/')[1]}`;
      const customMetadata = {
        app: 'JobSeek',
        user: this.user.idUser.toString()
      };

      this.message = 'Veuillez patienter...';

      this.imagesService.uploadToStorage(path, this.file, customMetadata).then(
        () => {
          this.imagesService.getDownloadFromStorage(`avatar/${this.user.idUser}.jpeg`).subscribe((url) => {
            this.user.avatarUrl = url;
            this.usersService.update(this.user.idUser, this.user).subscribe();
            this.message = 'Téléchargement terminé.';
          });
        }
      ).catch(() => this.message = 'Une erreur est survenue pendant le téléchargement.');
    }
  }
}