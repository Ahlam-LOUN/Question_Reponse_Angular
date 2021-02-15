import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './components/question-list/question-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path:"questions", component: QuestionListComponent }
]

@NgModule({
 
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
