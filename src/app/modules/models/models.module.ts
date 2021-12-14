// ##################################################################################################
// ## IMPORTACIÓNS
// ##################################################################################################
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// --------------------------------------------------------------------------------------------------
// Módulos propios
// --------------------------------------------------------------------------------------------------
import { ThemeModule } from '../theme/theme.module';

// --------------------------------------------------------------------------------------------------
// Compoñentes propios
// --------------------------------------------------------------------------------------------------

@NgModule({
  // ------------------------------------------------------------------------------------------------
  // -- DECLARATIONS
  // ------------------------------------------------------------------------------------------------
  declarations: [
    // Compoñentes propios
  ],

  // ------------------------------------------------------------------------------------------------
  // -- IMPORTS
  // ------------------------------------------------------------------------------------------------
  imports: [
    CommonModule,

    // Módulos propios
    ThemeModule,
  ],

  // ------------------------------------------------------------------------------------------------
  // -- EXPORTS
  // ------------------------------------------------------------------------------------------------
  exports: [
  ],
})
export class ModelsModule { }
