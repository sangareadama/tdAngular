import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {
  private apiServerUrl="http://localhost:8080";
  constructor(private http: HttpClient,) { }

  public getPersonne():Observable<any[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/personne/liste`);
  } 

  public savePersonne(personneData:any) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/personne/save`,personneData);
  }

  public updatePersonne(personneData:Personne) :Observable<any> {
    console.log("okkkkk  " +personneData.departementId)

    return this.http.post<any>( `${this.apiServerUrl}/api/personne/update`,personneData);
  }
  public CompleteUpdatePersonne(personne:Personne) :Observable<any> {

    return this.http.post<any>( `${this.apiServerUrl}/api/personne/completeUpdate`,personne);
  }

  public deletePersonne(personneData:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/personne/delete`,personneData);
  }

  public getDepartement():Observable<any[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/departement/liste`);
  } 
}
