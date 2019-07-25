import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService,
              private router: Router) {}

  /**
   * Permet de définir la condition d'accès être identifié pour l'accès à une route.
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

    const connected = this.authService.isConnected();
    if (!connected) {
      this.router.navigate(['/login']);
    }
    return connected;
  }
}
