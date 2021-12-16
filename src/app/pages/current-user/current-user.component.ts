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
import { ProjectService } from 'src/app/modules/models/services/project.service';
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
  commentList   : CommentApp[] = [];
  projectList   : Project[] = [];

  displayedColumns: string[] = [
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
    private projectService: ProjectService,
  ) { }

  // ************************************************************************************************
  // ** MÉTODOS DE ANGULAR
  // ************************************************************************************************
  ngOnInit(): void {
    this.subscriptions.push(
      this.currentUserService.getMe().subscribe((response) => {
        this.responseMe = response;
      })
    );

    this.subscriptions.push(
      this.projectService.getAll().subscribe((response) => {
        this.projectList = response.data;
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
