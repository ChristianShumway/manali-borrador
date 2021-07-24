import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasUserGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ){}


  async canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser =  await this.authService.currentUserValue;
    console.log(currentUser);
    if (!currentUser) {
      return true
    }
    this.router.navigate(['/admin']);
    return false;
  }
  
}
