import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
import { QuestionEditComponent } from '../question-edit/question-edit.component';

@Component({
  selector: 'pm-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: Question = null;

  @Output() editQuestion = new EventEmitter();


  constructor(private questionService: QuestionService,public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  deleteQuestion(questionId:string){
    this.questionService.deleteQuestion(questionId).subscribe(data => {
     console.log(data);
    
    });
  }
  openDialog(question:Question) {
    const modalRef=this.dialog.open(QuestionEditComponent);
    modalRef.componentInstance.question = question;
  }
  

}
