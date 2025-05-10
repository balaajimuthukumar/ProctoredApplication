import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { userData } from 'src/app/feature/ssologin/models/ssomodels';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userData: userData) : Observable<any> {
    return this.http.post(environment.apiUrl+'/login', userData).pipe(
      tap((response: any) => localStorage.setItem('logintoken', response.access_token)),
    );
  }


}
