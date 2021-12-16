// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { CommentApp } from 'src/app/models/commentapp.model';

// ##################################################################################################
// ## CLASE CommentFormComponent
// ##################################################################################################
@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styles: [
  ]
})
export class CommentFormComponent implements OnInit {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  @Input() commentApp?  : CommentApp;
  @Input() title  : string = "Usuario";

  formGroupControl = new FormGroup({
    expirationDate      : new FormControl(''),
    title               : new FormControl('', Validators.required),
    message             : new FormControl('', Validators.required),
    visibleToUserGroups : new FormControl('', Validators.required),
  });

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(
    private translate: TranslateService,
    private spinner: NgxSpinnerService,
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
    if (this.commentApp) {
      // ------------------------------------------------------------------------------------------------------------------
      // formGroupControl
      // ------------------------------------------------------------------------------------------------------------------
      this.formGroupControl.setValue({
        expirationDate      : (this.commentApp.expirationDate) ? this.commentApp.expirationDate : '',
        title               : (this.commentApp.title) ? this.commentApp.title : '',
        message             : (this.commentApp.message) ? this.commentApp.message : '',
        visibleToUserGroups : (this.commentApp.visibleToUserGroups) ? this.commentApp.visibleToUserGroups : '',

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
