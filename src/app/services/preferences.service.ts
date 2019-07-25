import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Preference} from '../model/preference';
import {HttpClient} from '@angular/common/http';
import {REST_DOMAIN} from '../model/constants';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(private http: HttpClient) { }

  findByUser(): Observable<Preference> {
    return this.http.get<Preference>(`${REST_DOMAIN}/preferences`);
  }
}
