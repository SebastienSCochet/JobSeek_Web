import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {REST_DOMAIN} from '../constants';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  /**
   * Sign up the user
   * @param user to sign in
   */
  signUp(user: User): Observable<User> {
    return this.http.post<User>(`${REST_DOMAIN}/users`, user);
  }

  /**
   * Get current connected user
   */
  getConnectedUser(): Observable<User> {
    return this.http.get<User>(`${REST_DOMAIN}/users`);
  }

  /**
   * *Update the user data
   * @param user to update
   */
  update(user: User): Observable<User> {
    return this.http.put<User>(`${REST_DOMAIN}/users`, user);
  }
}
