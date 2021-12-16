// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ResponseMe } from 'src/app/interfaces/response-data.interface';
import { User } from 'src/app/models/user.model';
import { CurrentUserService } from 'src/app/modules/current-user/serivces/current-user.service';
import { UserService } from 'src/app/modules/models/services/user.service';


// ##################################################################################################
// ## CLASE AdminService
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
  subscriptions : Subscription[] = [];
  responseMe!   : ResponseMe;
  userList      : User[] = [];

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(
    private translate: TranslateService,
    private currentUserService: CurrentUserService,
    private userService: UserService,
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
      this.userService.getAll().subscribe((response) => {
        this.userList = response.data;
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
