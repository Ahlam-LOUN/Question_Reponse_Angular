import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';
import { QuestionEditComponent } from './components/question-edit/question-edit.component';
import { ReponseAddComponent } from './components/reponse-add/reponse-add.component';

const routes: Routes = [
  { path: "", redirectTo: "/questions", pathMatch: "full" },
  { path:"questions", 
    component: QuestionListComponent },
  {
    path: 'question-add',
    component: QuestionAddComponent
  },
  {
    path: 'question-edit/:id',
    component: QuestionEditComponent
  },
  {
    path: 'reponse-add/:questionId',
    component: ReponseAddComponent
  }
]

@NgModule({
 
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
