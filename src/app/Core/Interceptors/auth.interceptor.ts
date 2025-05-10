import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/Token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken('logintoken');
    
    let req = (token) ? request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }): request;

    return next.handle(req);
  }  
}
