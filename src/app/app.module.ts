// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// --------------------------------------------------------------------------------------------------
// Traduccións
// --------------------------------------------------------------------------------------------------
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
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

    // Traduccións
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
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
  // -- PROVIDERS
  // ------------------------------------------------------------------------------------------------
  providers: [],

  // ------------------------------------------------------------------------------------------------
  // -- BOOTSTRAP
  // ------------------------------------------------------------------------------------------------
  bootstrap: [AppComponent]
})
export class AppModule { }

// --------------------------------------------------------------------------------------------------
// Traduccións
// --------------------------------------------------------------------------------------------------
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
