import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {}

  /**
   * Intercept HTTP request than set the Authorization header to rethrow it
   * @param request : HTTP request
   * @param next : HTTP Handler
   */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token: string = this.authService.getToken()
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: token
          }
        });
      }

      return next.handle(request);
    }
}
