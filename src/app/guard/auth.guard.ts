import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}

  /**
   * Permet de définir la condition d'accès être identifié pour l'accès à une route.
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.isConnected();
  }
}
