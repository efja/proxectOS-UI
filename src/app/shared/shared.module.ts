import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos
import { ThemeModule } from '../theme/theme.module';

// Compoñentes
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ],
  exports: [
    MenuComponent,
  ]
})
export class SharedModule { }
