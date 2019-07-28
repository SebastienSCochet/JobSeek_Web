import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {REST_DOMAIN} from '../model/constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(`${REST_DOMAIN}/users`, user);
  }

  getConnectedUser(): Observable<User> {
    return this.http.get<User>(`${REST_DOMAIN}/users`);
  }
}
