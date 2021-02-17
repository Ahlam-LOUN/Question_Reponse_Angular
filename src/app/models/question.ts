import {Reponse} from "./reponse"
export class Question{
    id:number;
    questionId:string;
	textQuestion:string;
	language:string;
    dateDeCreation:string;
	lastModified:string;
    reponses:Reponse[];

}