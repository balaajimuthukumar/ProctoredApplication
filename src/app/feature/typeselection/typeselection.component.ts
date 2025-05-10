import { Component } from '@angular/core';
import { CategoryType } from '../quiz/models/quiz.models';
import { CategoryService } from 'src/app/Core/services/Category/category.service';

@Component({
  selector: 'app-typeselection',
  templateUrl: './typeselection.component.html',
  styleUrls: ['./typeselection.component.scss']
})
export class TypeselectionComponent {
  // tags = {
  //   'Angular':false, 
  //   'Typescript':false, 
  //   'Javascript':false, 
  //   'Coldfusion':false, 
  //   'SQL':false, 
  //   'HTML':false, 
  //   'CSS':false, 
  //   'SCSS':false
  // }
  tags = {}
  isSelected: boolean[] = [false, false, false, false, false, false, false, false];

  constructor(
    private categoryService: CategoryService
  ) {

  }

  fetchTags() {
    let catList = this.categoryService.getCategoryType(1);
    catList.subscribe({
      next: (response) => {
        response.map((currVal, idx)=>{
          return currVal.categoryName
        })
      }, error: (error) => {

      }
    })
  }

  selectTag(index: number) {
    this.isSelected[index] = !this.isSelected[index];
  }

  submitSelection() {
    let selectedTags: CategoryType[] = [];
    
  }
}
