import { QuestionService } from './../../services/question.service';
import { Component, OnInit} from '@angular/core';
import{Question} from './../../models/question'




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

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getAll().subscribe(data => {
      this.questions= data;
    });
  }

  


}