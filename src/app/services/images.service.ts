import { Injectable } from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private storage: AngularFireStorage) { }

  public uploadToStorage(path: string, file: File, customMetadata): AngularFireUploadTask {
    return this.storage.upload(path, file, { customMetadata });
  }

  public getDownloadFromStorage(path: string) {
    return this.storage.ref(path).getDownloadURL();
  }
}
