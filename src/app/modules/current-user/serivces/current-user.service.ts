// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData, ResponseMe } from 'src/app/interfaces/response-data.interface';

// ##################################################################################################
// ## CLASE BaseService
// ##################################################################################################
@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  private uri : string = `${environment.API_URI}/me`;

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(private http: HttpClient) { }

  // ************************************************************************************************
  // ** MÉTODOS CRUD (READ)
  // ************************************************************************************************
  // ------------------------------------------------------------------------------------------------
  // -- GET - ME
  // ------------------------------------------------------------------------------------------------
  public getMe(): Observable<ResponseMe> {
    const url = `${this.uri}/`;

    return this.http.get<ResponseMe>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - ME -> COMMENTS
  // ------------------------------------------------------------------------------------------------
  public getAllComments(): Observable<ResponseData> {
    const url = `${this.uri}/comments`;

    return this.http.get<ResponseData>(url);
  }

  public getComment(id: string): Observable<ResponseData> {
    const url = `${this.uri}/comments/${id}`;

    return this.http.get<ResponseData>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - ME -> PROJECTS
  // ------------------------------------------------------------------------------------------------
  public getAllProjects(): Observable<ResponseData> {
    const url = `${this.uri}/projects`;

    return this.http.get<ResponseData>(url);
  }

  public getProject(id: string): Observable<ResponseData> {
    const url = `${this.uri}/projects/${id}`;

    return this.http.get<ResponseData>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - ME -> PROJECTS -> REPOSITORIES
  // ------------------------------------------------------------------------------------------------
  public getAllRepositories(id: string): Observable<ResponseData> {
    const url = `${this.uri}/projects/${id}/repositories`;

    return this.http.get<ResponseData>(url);
  }

  public getRepository(id: string): Observable<ResponseData> {
    const url = `${this.uri}/projects/repositories/${id}`;

    return this.http.get<ResponseData>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - ME -> PROJECTS -> REQUIREMENTS
  // ------------------------------------------------------------------------------------------------
  public getAllRequirements(id: string): Observable<ResponseData> {
    const url = `${this.uri}/projects/${id}/requirements`;

    return this.http.get<ResponseData>(url);
  }

  public getRequirement(id: string): Observable<ResponseData> {
    const url = `${this.uri}/projects/requirements/${id}`;

    return this.http.get<ResponseData>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - ME -> CONTACTS
  // ------------------------------------------------------------------------------------------------
  public getAllContacts(): Observable<ResponseData> {
    const url = `${this.uri}/contacts`;

    return this.http.get<ResponseData>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - ME -> SCHEDULE
  // ------------------------------------------------------------------------------------------------
  public getSchedule(): Observable<ResponseData> {
    const url = `${this.uri}/schedule`;

    return this.http.get<ResponseData>(url);
  }
}
