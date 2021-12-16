// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../environments/environment';

// ##################################################################################################
// ## CLASE AppComponent
// ##################################################################################################
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ************************************************************************************************
  // ** ATRIBUTOS
  // ************************************************************************************************
  title = 'ProxectOS-UI';
  app: string;
  version: string;
  value: number = 0;

  // ************************************************************************************************
  // ** CONSTRUTOR
  // ************************************************************************************************
  constructor(
    private translate: TranslateService,
  ) {
      this.app = environment.APP_NAME;
      this.version = environment.APP_VERSION;
  }
}
