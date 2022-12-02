import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListquizeComponent } from './listquize/listquize.component';
import { QuestionComponent } from './question/question.component';
import { Question1Component } from './question1/question1.component';
import { Question2Component } from './question2/question2.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question1', component: Question1Component },
  { path: 'question2', component: Question2Component },
    { path: 'questiong', component: ListquizeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
