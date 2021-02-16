import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'pm-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {
  
  question: Question;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private questionService: QuestionService) {
    this.question = new Question();
  }
  ngOnInit(): void {}

  onSubmit() {
    this.questionService.addQuestion(this.question).subscribe(result => this.gotoQuestionList());
  }

  gotoQuestionList() {
    this.router.navigate([':questionId/reponse-add']);
  }
  

}
