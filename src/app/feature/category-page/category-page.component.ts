import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {

  constructor(private router: Router) {}

  navigateToAccount() {
    this.router.navigate(['quiz/category']);
  }
}
