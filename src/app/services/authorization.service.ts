import { Injectable } from '@angular/core';
import { Environment } from '../Environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInDto } from './models/dtos';
import { LoginResponse, RefreshTokenResponse } from './models/response';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private apiUrl = `${Environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  login(signInDto: SignInDto):Observable<LoginResponse>
  {
    return this.http.post<LoginResponse>(`${this.apiUrl}/Login`, signInDto);
  }

  refreshToken(userId: number):Observable<RefreshTokenResponse>
  {
    return this.http.post<RefreshTokenResponse>(`${this.apiUrl}/RefreshToken`, userId);
  }
  
}
