import { Injectable } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

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
}
