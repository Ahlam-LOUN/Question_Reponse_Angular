import { QuestionService } from './../../services/question.service';
import { Component, Inject, OnInit} from '@angular/core';
import{Question} from './../../models/question'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { QuestionDetailComponent } from '../question-detail/question-detail.component';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-question',
  styleUrls: ['./question-list.component.css'],
  templateUrl: './question-list.component.html',
})
export class QuestionListComponent implements OnInit{
  questions:Question[];

  constructor(private questionService: QuestionService,public dialog: MatDialog) { }

  ngOnInit() {
    this.questionService.getAll().subscribe(data => {
      this.questions= data;
    });
  }
  deleteAllQuestion(){
    this.questionService.deleteAllQuestion().subscribe(data => {
     console.log(data);
     this.ngOnInit();
    });
  }
  openDialog(question:Question) {
    const modalRef=this.dialog.open(QuestionDetailComponent);
    modalRef.componentInstance.question = question;
  }

  


}