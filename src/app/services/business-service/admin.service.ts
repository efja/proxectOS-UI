// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { ResponseData, ResponseUserCommons } from '../../interfaces/response-data.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// ##################################################################################################
// ## CLASE AdminService
// ##################################################################################################
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  private uri : string = `${environment.API_URI}/admin`;

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(private http: HttpClient) { }

  // ************************************************************************************************
  // ** MÉTODOS CRUD (READ)
  // ************************************************************************************************
  // ------------------------------------------------------------------------------------------------
  // -- GET - ADMIN
  // ------------------------------------------------------------------------------------------------
  public getAdmin(): Observable<ResponseUserCommons> {
    const url = `${this.uri}`;

    return this.http.get<ResponseUserCommons>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - ROLES
  // ------------------------------------------------------------------------------------------------
  public getRoles(): Observable<ResponseData> {
    const url = `${this.uri}/roles`;

    return this.http.get<ResponseData>(url);
  }

  public getRole(id: string): Observable<ResponseData> {
    const url = `${this.uri}/roles/${id}`;

    return this.http.get<ResponseData>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - USERS
  // ------------------------------------------------------------------------------------------------
  public getUsers(): Observable<ResponseData> {
    const url = `${this.uri}/users`;

    return this.http.get<ResponseData>(url);
  }

  public getUser(id: string): Observable<ResponseData> {
    const url = `${this.uri}/users/${id}`;

    return this.http.get<ResponseData>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - USER GROUPS
  // ------------------------------------------------------------------------------------------------
  public getUserGroups(): Observable<ResponseData> {
    const url = `${this.uri}/userGroups`;

    return this.http.get<ResponseData>(url);
  }

  public getUserGroup(id: string): Observable<ResponseData> {
    const url = `${this.uri}/userGroup/${id}s`;

    return this.http.get<ResponseData>(url);
  }

  // ------------------------------------------------------------------------------------------------
  // -- GET - USER SCHEDULES
  // ------------------------------------------------------------------------------------------------
  public getSchedules(): Observable<ResponseData> {
    const url = `${this.uri}/schedules`;

    return this.http.get<ResponseData>(url);
  }

  public getSchedule(id: string): Observable<ResponseData> {
    const url = `${this.uri}/schedules/${id}`;

    return this.http.get<ResponseData>(url);
  }

}
