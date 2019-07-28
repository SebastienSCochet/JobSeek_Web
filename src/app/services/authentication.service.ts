import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {LoginRequest} from '../payload/login-request';
import {REST_DOMAIN} from '../model/constants';
import {LoginResponse} from '../payload/login-response';
import {Observable, of} from 'rxjs';


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
  public authenticate(loginRequest: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(`${REST_DOMAIN}/auth/login`, loginRequest, {observe: 'response'});
  }

  public isConnected(): Observable<boolean> {
    let token = localStorage.getItem('token');
    if (token != null) {
      token = token.slice(7);
      return this.http.post<boolean>(`${REST_DOMAIN}/auth/tokens`, token);
    } else {
      return of(false);
    }
  }

  public disconnect() {
    localStorage.removeItem('token');
  }


  getToken(): string {
    return localStorage.getItem('token');
  }
}
