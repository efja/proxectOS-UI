// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { CurrentUserService } from 'src/app/modules/current-user/serivces/current-user.service';
import { UserService } from 'src/app/modules/models/services/user.service';

// ##################################################################################################
// ## CLASE AdminComponent
// ##################################################################################################
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  subscriptions : Subscription[] = [];
  userList      : User[] = [];
  title         : string = "Lista de usuarios";

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(
    private translate: TranslateService,
    private currentUserService: CurrentUserService,
    private userService: UserService,
  ) {
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
  // ** MÉTODOS DE ANGULAR
  // ************************************************************************************************
  ngOnInit(): void {
  }

  // ************************************************************************************************
  // ** MÉTODOS PROPIOS
  // ************************************************************************************************

  // ************************************************************************************************
  // ** UTILIDADES
  // ************************************************************************************************
}
