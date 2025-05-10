import { Injectable } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { tokenData, userData } from 'src/app/feature/ssologin/models/ssomodels';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private authService: AuthService) { }

  // requestToken(userData: userData) {
  //   this.authService.login(userData).subscribe({
  //     next: (response) => {
  //       this.settoken({
  //         tokenName: 'logintoken',
  //         token: response.access_token
  //       })
  //     }, error: (error) => {

  //     }
  //   })
  // }

  settoken(tokenData: tokenData){
    localStorage.setItem(tokenData.tokenName, tokenData.token);
  }

  getToken(tokenName: string) {
    return localStorage.getItem(tokenName);
  }

  removeToken(tokenName: string) {
    localStorage.removeItem(tokenName);
  }

  setCookie (){

  }

  getCookie (){

  }

  removeCookie (){

  }

  setSession () {

  }

  getSession () {

  }

  removeSession () {
    
  }

}
