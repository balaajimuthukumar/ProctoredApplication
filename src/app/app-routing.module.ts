import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoryPageComponent } from './feature/category-page/category-page.component';
import { QuizComponent } from './feature/quiz/quiz.component';
import { TypeselectionComponent } from './feature/typeselection/typeselection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    component: AppComponent,
    children:[
      {path:'category', component: CategoryPageComponent},
      {path:'test', component: QuizComponent},
    ],
  }, 
  {
    path: 'categorytype',
    component: TypeselectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
