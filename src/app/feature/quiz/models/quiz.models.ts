import { Time } from "@angular/common";

export const questions = {
    questions: [
        {
            question: 'What is the capital of France?',
            options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
            questionId: 1
        },
        {
            question: 'What is the largest planet in our solar system?',
            options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
            questionId: 2
        },
        {
            question: 'Who wrote "Romeo and Juliet"?',
            options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'],
            questionId: 3
        },
        {
            question: 'What is the chemical symbol for gold?',
            options: ['Au', 'Ag', 'Pb', 'Fe'],
            questionId: 4
        }
    ]
}

export interface Question {
    question: string;
    options: string[];
    questionId: number;
}

export interface Category {
    categoryId: number;
    categoryName: string;
    questions: Question[];
}

export interface TestResult {
    score: number,
    dateOfTest: Date,
    testDuration: number,
    testId: number,
    testCategory: string,
    testCategoryId: number,
    totalQuestions: number,
    noOfCorrectAnswers: number,
    noOfWrongAnswers: number,
    testCompletedTime: Time,
    isStarted: boolean,
}

export interface TimerDetails {
    startTime: Date,
    endTime: Date,
}

export class TermsDetails {
    termsAndConditions: string = '';
    privacyPolicy: string = '';
    acceptTerms: boolean = false;
    acceptPrivacy: boolean = false;
}

export interface CategoryType {
    categoryId: number,
    categoryName: string,
}

export interface UserPreferences {
    categoryTypeId: number,   
}