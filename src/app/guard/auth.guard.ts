import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService,
              private router: Router) {}

  /**
   * Get whether the condition to access a component is true or false
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isConnected()
      .pipe(map(value => {
        if (value) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }));
  }
}
