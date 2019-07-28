import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthenticationService) {}

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
