import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/services/Auth/auth.service';

@Component({
  selector: 'app-ssologin',
  templateUrl: './ssologin.component.html',
  styleUrls: ['./ssologin.component.scss']
})
export class SsologinComponent {
  constructor(
     private authService: AuthService,
     private router:Router,
  ) { }

  ssoLogin() {
    this.authService.login({
      username: 'user',
      password: 'admin'
    });
    this.router.navigate(['/home']);
  }
}
