import { Injectable } from '@angular/core';
import{Reponse} from '../models/reponse'
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http: HttpClient) { }
  addReponse(data:Reponse) {
    return this.http.post(`${environment.baseUrlReponse}`, data);
  }

}
