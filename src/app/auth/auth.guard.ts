import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, skip, skipWhile, take, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  /**
   *
   */
  constructor(private authService: AuthService) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let x = this.authService.signedIn$.pipe(
      // skipWhile((value: boolean | null) => {
      //   return value === null;
      // }),
      filter((v) => v !== null),
      take(1)
    );
    let y = x as Observable<boolean>;

    return y;
  }
}
