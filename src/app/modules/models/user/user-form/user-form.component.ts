// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/models/user.model';

// ##################################################################################################
// ## CLASE UserFormComponent
// ##################################################################################################
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [
  ]
})
export class UserFormComponent implements OnInit {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  @Input() user? : User;

  formGroupControl = new FormGroup({
    name              : new FormControl('', Validators.required),
    firstSurname      : new FormControl('', Validators.required),
    secondSurname     : new FormControl(''),
    login             : new FormControl('', Validators.required),
    password          : new FormControl('', Validators.required),
    isCustomer        : new FormControl(''),
    salary            : new FormControl(''),
    flexibleSchedule  : new FormControl(''),
    vacantions        : new FormControl(''),
    userSchedule      : new FormControl(''),
    contacts          : new FormControl('', Validators.required),
    defaultUserGroups : new FormControl(''),
  });

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(
    private translate: TranslateService,
  ) {
    this.disableForm();
   }

  // ************************************************************************************************
  // ** MÉTODOS DE ANGULAR
  // ************************************************************************************************
  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.loadDataOnForm();
  }

  // ************************************************************************************************
  // ** MÉTODOS PROPIOS
  // ************************************************************************************************
  loadDataOnForm() {
    if (this.user) {
      // ------------------------------------------------------------------------------------------------------------------
      // formGroupControl
      // ------------------------------------------------------------------------------------------------------------------
      this.formGroupControl.setValue({
        name              : (this.user.name) ? this.user.name : '',
        firstSurname      : (this.user.firstSurname) ? this.user.firstSurname : '',
        secondSurname     : (this.user.secondSurname) ? this.user.secondSurname : '',
        login             : (this.user.login) ? this.user.login : '',
        password          : (this.user.password) ? this.user.password : '',
        isCustomer        : (this.user.isCustomer) ? this.user.isCustomer : '',
        salary            : (this.user.salary) ? this.user.salary : '',
        flexibleSchedule  : (this.user.flexibleSchedule) ? this.user.flexibleSchedule : '',
        vacantions        : (this.user.vacantions) ? this.user.vacantions : '',
        userSchedule      : (this.user.userSchedule) ? this.user.userSchedule : '',
        contacts          : (this.user.contacts) ? this.user.contacts : '',
        defaultUserGroups : (this.user.defaultUserGroups) ? this.user.defaultUserGroups : '',
      });
    }

    // ------------------------------------------------------------------------------------------------------------------
    // Filtros
    // ------------------------------------------------------------------------------------------------------------------
    this.addFilters();
  }

  resetFormDirty() {
    // Quita las marcas "dirty" de los inputs
    this.formGroupControl.markAsPristine();
  }

  cleanForm() {
    // ------------------------------------------------------------------------------------------------------------------
    // formGroupControl
    // ------------------------------------------------------------------------------------------------------------------
    Object.keys(this.formGroupControl.controls).forEach((name) => {
      const currentControl = this.formGroupControl.controls[name];

      currentControl.setValue('');
    });
  }

  disableForm() {
    // ------------------------------------------------------------------------------------------------------------------
    // formGroupControl
    // ------------------------------------------------------------------------------------------------------------------
    Object.keys(this.formGroupControl.controls).forEach((name) => {
      const currentControl = this.formGroupControl.controls[name];

      currentControl.disable();
    });
  }

  enableForm() {
    // ------------------------------------------------------------------------------------------------------------------
    // formGroupControl
    // ------------------------------------------------------------------------------------------------------------------
    Object.keys(this.formGroupControl.controls).forEach((name) => {
      const currentControl = this.formGroupControl.controls[name];

      currentControl.enable();
    });
  }

  addFilters() {
    // ------------------------------------------------------------------------------------------------------------------
    // formGroupControl
    // ------------------------------------------------------------------------------------------------------------------
  }

  // ************************************************************************************************
  // ** UTILIDADES
  // ************************************************************************************************
}
