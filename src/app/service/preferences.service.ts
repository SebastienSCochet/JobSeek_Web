import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Preference} from '../model/preference';
import {HttpClient} from '@angular/common/http';
import {REST_DOMAIN} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  constructor(private http: HttpClient) { }

  /**
   * Find preference object of the current user
   */
  findByUser(): Observable<Preference> {
    return this.http.get<Preference>(`${REST_DOMAIN}/preferences`);
  }
}
