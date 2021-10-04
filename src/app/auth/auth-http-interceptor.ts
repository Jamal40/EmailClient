import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      withCredentials: true,
    });
    return next.handle(modifiedReq);
    /*    .pipe(
      filter((value) => value.type === HttpEventType.Response),
      tap((value) => {
        console.log('Request has been sent');
      })
    );*/
  }
}
