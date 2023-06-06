import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlfaArgentinaComponent } from './alfa-argentina/alfa-argentina.component';
import { AlfaBrasilComponent } from './alfa-brasil/alfa-brasil.component';
import { AlfabetoComponent } from './alfabeto/alfabeto.component';



@NgModule({
  declarations: [
    AlfaArgentinaComponent,
    AlfaBrasilComponent,
    AlfabetoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlfaArgentinaComponent,
    AlfaBrasilComponent
  ]
})
export class AlfabetoModule { }
