import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {LoginRequest} from '../payload/login-request';
import {REST_DOMAIN} from '../model/constants';
import {LoginResponse} from '../payload/login-response';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  /**
   * Try to authenticate, store the token in the local database and return the status code of the request.
   * @param loginRequest credentials
   * @return status code
   */
  public authenticate(loginRequest: LoginRequest) {
    return this.http.post<LoginResponse>(`${REST_DOMAIN}/auth/login`, loginRequest, {observe: 'response'});
  }

  public isConnected() {
    let authenticated = false;
    const token = localStorage.getItem('token').slice(7);

    this.http.post<boolean>(`${REST_DOMAIN}/auth/tokens`, token).subscribe(
      connected => authenticated = connected
    );

    return authenticated;
  }

  public disconnect() {
    localStorage.removeItem('token');
  }


}
