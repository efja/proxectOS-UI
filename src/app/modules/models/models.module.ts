// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --------------------------------------------------------------------------------------------------
// Módulos propios
// --------------------------------------------------------------------------------------------------
import { ThemeModule } from '../theme/theme.module';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';

import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';

// --------------------------------------------------------------------------------------------------
// Compoñentes propios
// --------------------------------------------------------------------------------------------------

@NgModule({
  // ------------------------------------------------------------------------------------------------
  // -- DECLARATIONS
  // ------------------------------------------------------------------------------------------------
  declarations: [
    // Compoñentes propios
    CommentFormComponent,
    CommentListComponent,
    ProjectFormComponent,
    ProjectListComponent,
    UserFormComponent,
    UserListComponent,
  ],

  // ------------------------------------------------------------------------------------------------
  // -- IMPORTS
  // ------------------------------------------------------------------------------------------------
  imports: [
    CommonModule,

    // Módulos propios
    ThemeModule,

    // Toast
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
      enableHtml: true
    }),

    // Traduccións
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],

  // ------------------------------------------------------------------------------------------------
  // -- EXPORTS
  // ------------------------------------------------------------------------------------------------
  exports: [
    // Compoñentes propios
    CommentFormComponent,
    CommentListComponent,
    ProjectFormComponent,
    ProjectListComponent,
    UserFormComponent,
    UserListComponent,
  ],

  // ------------------------------------------------------------------------------------------------
  // -- PROVIDERS
  // ------------------------------------------------------------------------------------------------
  providers: [
  ],

  // ------------------------------------------------------------------------------------------------
  // -- SCHEMA
  // ------------------------------------------------------------------------------------------------
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ModelsModule { }
