import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImagesService} from '../../service/images.service';
import {User} from '../../model/user';
import {UsersService} from '../../service/users.service';

@Component({
  selector: 'app-user-profile-avatar',
  templateUrl: './user-profile-avatar.component.html',
  styleUrls: ['./user-profile-avatar.component.scss']
})
export class UserProfileAvatarComponent implements OnInit {
  file: File;
  @Input() user: User;
  message: string;
  @Output() avatarChange = new EventEmitter();

  constructor(private imagesService: ImagesService,
              private usersService: UsersService) { }

  ngOnInit() {}

  setFile(event: FileList) {
    this.file = event.item(0);
  }

  /**
   *  Method triggered by the update button
   *  Upload the selected file to the Firebase Storage with a path "avatar/${user.id}.${fileExt}"
   *  Then get the download Url to emit it to the parent component (which will update the profile picture)
   */
  startUpload() {
    if (this.file) {
      if (this.file.type.split('/')[0] !== 'image') {
        alert('Le type de fichier ne correspond pas.');
        return;
      } else if (this.file.size > 1024 * 1024 * 5) {
        this.message = 'La taille de l\'image ne peut dépasser 5Mo.';
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
          this.imagesService.getDownloadFromStorage(path).subscribe((url) => {
            this.user.avatarUrl = path;
            this.usersService.update(this.user).subscribe();
            this.message = 'Téléchargement terminé.';
            this.avatarChange.emit(url);
          });
        }
      ).catch(() => this.message = 'Une erreur est survenue pendant le téléchargement.');
    }
  }
}
