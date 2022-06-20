import { NgModule } from '@angular/core';

import {
  MatButtonModule,  
} from '@angular/material/button';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  imports: [
    MatButtonModule,  
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  exports: [
    MatButtonModule,   
    MatFormFieldModule, 
    MatAutocompleteModule
  ]
})

export class MaterialModule {}