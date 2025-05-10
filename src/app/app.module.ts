import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SsologinComponent } from './feature/ssologin/ssologin.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Core/Interceptors/auth.interceptor';
import { QuizComponent } from './feature/quiz/quiz.component';
import { CategoryPageComponent } from './feature/category-page/category-page.component';
import { TypeselectionComponent } from './feature/typeselection/typeselection.component';
@NgModule({
  declarations: [
    AppComponent,
    SsologinComponent,
    QuizComponent,
    CategoryPageComponent,
    TypeselectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
