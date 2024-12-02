import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class authInterceptorInterceptor  implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('eToken');
      if (token) {
          const cloned = req.clone({
              setHeaders: {
                  Authorization: `Bearer ${token}`,
              },
          });
          return next.handle(cloned);
      }
      return next.handle(req);
  }
}