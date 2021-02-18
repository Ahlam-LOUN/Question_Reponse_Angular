import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import{Question} from '../models/question'


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/questions`);
  }
  addQuestion(data: Question) {
    return this.http.post(`${environment.baseUrl}`, data);
  }
  updateQuestion(id: string, value: any): Observable<Object> {  
    return this.http.put(`${environment.baseUrl}/${id}`, value);  
  } 
  deleteQuestion(id: string): Observable<any> {  
    return this.http.delete(`${environment.baseUrl}/${id}`, { responseType: 'text' });  
  } 
  addResponseToQuestion(questionId:string,reponseId:string):Observable<any>{
    return this.http.put(`${environment.baseUrl}/${questionId}/${reponseId}`, { responseType: 'text' });  

  }
  deleteAllQuestion(): Observable<any> {  
    return this.http.delete(`${environment.baseUrl}`, { responseType: 'text' });  
  } 
}
