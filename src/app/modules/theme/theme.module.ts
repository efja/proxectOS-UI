// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { NgModule } from '@angular/core';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { KnobModule } from 'primeng/knob';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  // ------------------------------------------------------------------------------------------------
  // -- DECLARATIONS
  // ------------------------------------------------------------------------------------------------
  declarations: [],

  // ------------------------------------------------------------------------------------------------
  // -- EXPORTS
  // ------------------------------------------------------------------------------------------------
  exports: [
    ButtonModule,
    CardModule,
    KnobModule,
    MenubarModule,
  ],
})
export class ThemeModule { }
