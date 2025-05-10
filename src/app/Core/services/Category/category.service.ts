import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { API } from '../../constants/api.constants';
import { Observable, tap } from 'rxjs';
import { TokenService } from '../Token/token.service';
import { Category, CategoryType } from 'src/app/feature/quiz/models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getCategoryType (userId: number): Observable<CategoryType[]> {
    return this.http.post(environment.backendUrl+API.catgoryType,{
      userId:1
    }).pipe(
      tap((response: any) => {
        console.log('Category Type Response:', response);
        this.tokenService.settoken({
          tokenName:'categoryType',
          token:response
        })
      })
    );
  }

  getCategoryList ():Observable<Category[]> {
    let categoryType = this.tokenService.getToken('categoryType');
    return this.http.post(environment.backendUrl+API.categoryList, {
      userId:1,
      categoryType: categoryType
    }) as Observable<Category[]>;
  }

  getCategoryTest() {

  }

  updateCategorySelection() {

  }
}
