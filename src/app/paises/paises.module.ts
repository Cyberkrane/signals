import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArgentinaComponent } from './argentina/argentina.component';
import { BrasilComponent } from './brasil/brasil.component';
import { FormsModule } from '@angular/forms';
import { PaisComponent } from './pais/pais.component';

@NgModule({
  declarations: [
    ArgentinaComponent,
    BrasilComponent,
    PaisComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisesModule { }
