// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { ResponseMe } from 'src/app/interfaces/response-data.interface';

import { Project } from 'src/app/models/project.model';
import { User } from 'src/app/models/user.model';

import { CurrentUserService } from 'src/app/modules/current-user/serivces/current-user.service';
import { CommentApp } from '../../models/commentapp.model';

// ##################################################################################################
// ## CLASE CurrentUserComponent
// ##################################################################################################
@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.css'],
})
export class CurrentUserComponent implements OnInit {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  title         : string = "Información personal";
  subscriptions : Subscription[] = [];

  responseMe!   : ResponseMe;
  commentsList  : CommentApp[] = [];

  displayedCommentsColumns: string[] = [
    'expirationDate',
    'title',
    'message',
    'createdBy',
  ];

  projectsList  : Project[] = [];

  displayedProjectsColumns: string[] = [
    'name',
    'createdBy',
    'targetStartDate',
    'targetFinishDate',
  ];

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(
    private translate: TranslateService,
    private currentUserService: CurrentUserService,
  ) { }

  // ************************************************************************************************
  // ** MÉTODOS DE ANGULAR
  // ************************************************************************************************
  ngOnInit(): void {
    this.subscriptions.push(
      this.currentUserService.getMe().subscribe((response) => {
        this.responseMe = response;
        this.projectsList = response.projects?.data;
        this.commentsList = response.comments?.data;
      })
    );
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
      });
    }
  }

  // ************************************************************************************************
  // ** MÉTODOS PROPIOS
  // ************************************************************************************************

  // ************************************************************************************************
  // ** UTILIDADES
  // ************************************************************************************************
}
