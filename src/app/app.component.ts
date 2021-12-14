import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProxectOS-UI';
  app: string;
  version: string;
  value: number = 0;


  constructor(
    private translate: TranslateService
  ) {
      translate.setDefaultLang('gl');

      this.app = environment.APP_NAME;
      this.version = environment.APP_VERSION;
  }
}
