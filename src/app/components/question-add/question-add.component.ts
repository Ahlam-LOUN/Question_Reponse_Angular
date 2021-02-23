import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
import { Reponse } from 'src/app/models/reponse';
import { ReponseService } from 'src/app/services/reponse.service';
@Component({
  selector: 'pm-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  question: Question;
  reponse: Reponse;
  constructor(
    private questionService: QuestionService,
    private reponseService:ReponseService) {
    this.question = new Question();
    this.reponse = new Reponse();
  }
  ngOnInit(): void {
  }
  questionId ;
  addQues() {
  this.questionService.addQuestion(this.question).subscribe((result : Question)=> {
  this.question=result,
  console.log(result),
  this.questionId=this.question.questionId;
});
  }
  addreponse(reponseForm: any) {
    console.log("L'id question est :"+this.questionId);  
    this.reponse = new Reponse();
    this.reponseService.addReponse(this.reponse).subscribe((result:Reponse) => {
    this.reponse=result,
    console.log("L'id de reponse est :"+this.reponse.reponseId); 
    this.questionService.addResponseToQuestion(this.questionId,this.reponse.reponseId).subscribe(data => {  
    console.log(data);},  
    error => console.log(error));
    reponseForm.form.resetForm(); 
    });
  }


}
