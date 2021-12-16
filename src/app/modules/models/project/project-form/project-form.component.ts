// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { Project } from 'src/app/models/project.model';

// ##################################################################################################
// ## CLASE ProjectFormComponent
// ##################################################################################################
@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styles: [
  ]
})
export class ProjectFormComponent implements OnInit {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  @Input() project?  : Project;
  @Input() title  : string = "Usuario";

  formGroupControl = new FormGroup({
    startDate         : new FormControl(''),
    finishDate        : new FormControl(''),
    targetStartDate   : new FormControl(''),
    targetFinishDate  : new FormControl(''),
    name              : new FormControl('', Validators.required),
    description       : new FormControl('', Validators.required),
    assignedStage     : new FormControl(''),
    assignedUsers     : new FormControl(''),
    productOwner      : new FormControl('', Validators.required),
    requirements      : new FormControl(''),
    repositories      : new FormControl(''),
    comments          : new FormControl(''),
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
    if (this.project) {
      // ------------------------------------------------------------------------------------------------------------------
      // formGroupControl
      // ------------------------------------------------------------------------------------------------------------------
      this.formGroupControl.setValue({
        startDate         : (this.project.startDate) ? this.project.startDate : '',
        finishDate        : (this.project.finishDate) ? this.project.finishDate : '',
        targetStartDate   : (this.project.targetStartDate) ? this.project.targetStartDate : '',
        targetFinishDate  : (this.project.targetFinishDate) ? this.project.targetFinishDate : '',
        name              : (this.project.name) ? this.project.name : '',
        description       : (this.project.description) ? this.project.description : '',
        assignedStage     : (this.project.assignedStage) ? this.project.assignedStage : '',
        assignedUsers     : (this.project.assignedUsers) ? this.project.assignedUsers : '',
        productOwner      : (this.project.productOwner) ? this.project.productOwner : '',
        requirements      : (this.project.requirements) ? this.project.requirements : '',
        repositories      : (this.project.repositories) ? this.project.repositories : '',
        comments          : (this.project.comments) ? this.project.comments : '',
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
