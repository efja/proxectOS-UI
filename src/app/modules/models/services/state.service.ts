// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseModelService } from './base-model.service';

// ##################################################################################################
// ## CONSTANTES
// ##################################################################################################
const ENDPOINT : string = 'states';

// ##################################################################################################
// ## CLASE StateService
// ##################################################################################################
@Injectable({
  providedIn: 'root'
})
export class StateService extends BaseModelService {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(protected override http: HttpClient) {
    super(http);

    this.setEndpoint(ENDPOINT);
  }

  // ************************************************************************************************
  // ** UTILIDADES
  // ************************************************************************************************
}