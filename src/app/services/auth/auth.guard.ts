import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {switchMap, take, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(
     next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot
        ): Observable<boolean> {
        return this.authService.userIsAuthenticated.pipe(take(1),
            switchMap((isAuthenticated: any) => {
                if (!isAuthenticated) {
                    return this.authService.autoLogin();
                } else {
                    return isAuthenticated;
                }
            }),
            tap((isAuthenticated: boolean) => {
                if (!isAuthenticated) {
                    console.log(isAuthenticated);
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }
}
