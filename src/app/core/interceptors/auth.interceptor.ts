import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const params = new HttpParams().set('auth', token);
    const request = req.clone({ headers: headers, params: params });
    return next.handle(request);
  }
}
