import { Injectable } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private avatarChangeEvents = new Subject<string>();

  constructor(private storage: AngularFireStorage) { }

  /**
   * Upload the file to the storage of firebase
   * @param path: path of the file
   * @param file to upload
   * @param customMetadata metadata of file
   */
  public uploadToStorage(path: string, file: File, customMetadata): AngularFireUploadTask {
    return this.storage.upload(path, file, { customMetadata });
  }

  /**
   * Get download URI from Firebase storage
   * @param path of the file on Firebase Storage
   */
  public getDownloadFromStorage(path: string) {
    return this.storage.ref(path).getDownloadURL();
  }

  public announceAvatarChange(url) {
    this.avatarChangeEvents.next(url);
  }

  get onAvatarChange() {
    return this.avatarChangeEvents.asObservable();
  }
}
