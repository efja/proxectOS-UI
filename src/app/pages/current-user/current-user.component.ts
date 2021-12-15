// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ResponseMe } from 'src/app/interfaces/response-data.interface';
import { CurrentUserService } from 'src/app/modules/current-user/serivces/current-user.service';


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
  responseMe!    : ResponseMe;

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
