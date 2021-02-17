import {Question} from "./question"
export class Reponse{
     reponseId:string;
	 reponseQuestion:string;
	 language:string;
	dateDeCreation:string;
	lastModified:string;
	scoreResponse:number;
    questions:Question[];

}