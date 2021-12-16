// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// --------------------------------------------------------------------------------------------------
// Traduccións
// --------------------------------------------------------------------------------------------------
import {TranslateLoader, TranslateModule, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// --------------------------------------------------------------------------------------------------
// Módulos propios
// --------------------------------------------------------------------------------------------------
import { SharedModule } from './modules/shared/shared.module';
import { ModelsModule } from './modules/models/models.module';
import { AdminModule } from './modules/admin/admin.module';
import { CurrentUserModule } from './modules/current-user/current-user.module';

// --------------------------------------------------------------------------------------------------
// Compoñentes propios
// --------------------------------------------------------------------------------------------------
import { AdminComponent } from './pages/admin/admin.component';
import { CurrentUserComponent } from './pages/current-user/current-user.component';
import { ThemeModule } from './modules/theme/theme.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  // ------------------------------------------------------------------------------------------------
  // -- DECLARATIONS
  // ------------------------------------------------------------------------------------------------
  declarations: [
    AppComponent,

    // Compoñentes propios
    AdminComponent,
    CurrentUserComponent,
  ],

  // ------------------------------------------------------------------------------------------------
  // -- IMPORTS
  // ------------------------------------------------------------------------------------------------
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // Toast
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
      enableHtml: true
    }),

    // Traduccións
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

    // Módulos propios
    SharedModule,
    ModelsModule,
    AdminModule,
    CurrentUserModule,
    ThemeModule,
    BrowserAnimationsModule,
  ],

  // ------------------------------------------------------------------------------------------------
  // -- EXPORTS
  // ------------------------------------------------------------------------------------------------
  exports: [
    TranslateModule,
  ],

  // ------------------------------------------------------------------------------------------------
  // -- PROVIDERS
  // ------------------------------------------------------------------------------------------------
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MatDialogRef, useValue: {} },
    TranslatePipe,
  ],

  // ------------------------------------------------------------------------------------------------
  // -- BOOTSTRAP
  // ------------------------------------------------------------------------------------------------
  bootstrap: [AppComponent],

  // ------------------------------------------------------------------------------------------------
  // -- SCHEMA
  // ------------------------------------------------------------------------------------------------
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class AppModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'es', 'gl']);
    translate.setDefaultLang('gl');
    translate.use('gl');
  }
}

// --------------------------------------------------------------------------------------------------
// Traduccións
// --------------------------------------------------------------------------------------------------
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
