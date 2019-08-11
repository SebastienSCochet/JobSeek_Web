import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {LoginRequest} from '../payload/login-request';
import {REST_DOMAIN} from '../model/constants';
import {LoginResponse} from '../payload/login-response';
import {Observable, of, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginSuccessEvent = new Subject<object>();
  private disconnectEvent = new Subject<object>();

  constructor(private http: HttpClient) {
  }

  /**
   * Authenticate the user
   *
   * @param loginRequest with the user's email and password
   * @return the authentication token
   */
  public authenticate(loginRequest: LoginRequest): Observable<HttpResponse<LoginResponse>> {
    return this.http.post<LoginResponse>(`${REST_DOMAIN}/auth/login`, loginRequest, {observe: 'response'});
  }

  /**
   * Let know if the user is connected
   *
   * @return true if token is valid, or else false.
   */
  public isConnected(): Observable<boolean> {
    let token = localStorage.getItem('token');
    if (token != null) {
      token = token.slice(7);
      return this.http.post<boolean>(`${REST_DOMAIN}/auth/tokens`, token);
    } else {
      return of(false);
    }
  }

  /**
   * Disconnect the user
   */
  public disconnect() {
    localStorage.removeItem('token');
    this.disconnectEvent.next(null);
  }


  /**
   * Retrieve the token from local storage
   */
  public getToken(): string {
    return localStorage.getItem('token');
  }

  public announceSuccessfulLogin(object: object = null) {
    this.loginSuccessEvent.next(object);
  }

  get onLoginSuccess() {
    return this.loginSuccessEvent.asObservable();
  }

  get onDisconnect() {
    return this.disconnectEvent.asObservable();
  }
}
