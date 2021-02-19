import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question';
import { Reponse } from 'src/app/models/reponse';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'pm-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  question: Question;
  reponse: Reponse
  questionlist: Object;
  sub: any;
  questionId: any;
  constructor(private questionService: QuestionService,private _Activatedroute:ActivatedRoute) { }
  
 
  questionForm=new FormGroup({ 
    textQuestion:new FormControl(),   
    questionId:new FormControl(),  
    language:new FormControl()
  }); 

  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      console.log(params);
      this.questionId = params.get('questionId'); }); }
  
  
 updateQuestion(questionId:string){
  this.question=new Question();   
  this.question.questionId=questionId;  
  this.question.textQuestion=this.textQuestion.value;  
  this.question.language=this.language.value; 
  this.questionService.updateQuestion(this.question.questionId,this.question).subscribe(  
   data =>console.log(data));
       
 }  
   
get textQuestion(){  
  return this.questionForm.get('textQuestion');  
} 
get language(){  
  return this.questionForm.get('language');  
} 
 
}


