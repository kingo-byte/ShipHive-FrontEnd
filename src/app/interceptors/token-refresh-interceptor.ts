import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { AuthorizationService } from '../services/authorization.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TokenRefreshInterceptor implements HttpInterceptor {
  private jwtHelper: JwtHelperService;

  constructor(private authService: AuthorizationService) {
    this.jwtHelper = new JwtHelperService();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('token');
    const tokenIsExpiring = this.isTokenExpiring(token);
    const userId = 123; // Replace with logic to get the actual user ID

    if (tokenIsExpiring) {
      return this.authService.refreshToken(userId).pipe(
        switchMap((response: { token: string }) => {
          const newToken = response.token;
          sessionStorage.setItem('token', newToken);
          const clonedReq = req.clone({
            setHeaders: {
              Authorization: `Bearer ${newToken}`
            }
          });
          return next.handle(clonedReq);
        }),
        catchError((error: any) => {
          return of(error);
        })
      );
    } else {
      // If the token is not expiring, continue with the request as is
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(clonedReq);
    }
  }

  private isTokenExpiring(token: string | null): boolean {
    if (!token) {
      return false;
    }
    const expirationTime = this.jwtHelper.getTokenExpirationDate(token)?.getTime();
    if (!expirationTime) {
      return false;
    }
    const currentTime = Date.now();
    const timeLeft = expirationTime - currentTime;
    return timeLeft < 30000; // Check if the token is expiring in less than 30 seconds
  }
}
