import { Component } from '@angular/core';
import { Question } from './models/quiz.models';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  questions: Question[] = [];

  constructor() {}

  ngOnInit(){
    
  }
}
