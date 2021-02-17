import { Question } from './../../models/question';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reponse } from 'src/app/models/reponse';
import { ReponseService } from 'src/app/services/reponse.service';


@Component({
  selector: 'pm-reponse-add',
  templateUrl: './reponse-add.component.html',
  styleUrls: ['./reponse-add.component.css']
})
export class ReponseAddComponent implements OnInit {
  reponse: Reponse;
  sub: any;
  questionId: string;
@Input() question:Question;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private reponseService: ReponseService) {
    this.reponse = new Reponse();
  }
  ngOnInit(): void {
    this.sub=this.route.paramMap.subscribe(params => { 
      this.questionId = params.get('id'); });
      //alert("hhhh"+this.questionId);
  }

  onSubmit() {
    console.log("hhh"+this.questionId);
    this.reponseService.addReponse(this.reponse,this.questionId).subscribe(result => this.gotoQuestionList());
  }

  gotoQuestionList() {
  //  this.router.navigate(['/questions']);
  }
}
