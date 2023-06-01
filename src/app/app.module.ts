import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ArgentinaComponent } from './paises/argentina/argentina.component';
import { BrasilComponent } from './paises/brasil/brasil.component';
import { SharedModule } from './shared/shared.module';
import { AlfaArgentinaComponent } from './alfabetos/alfa-argentina/alfa-argentina.component';
import { AlfaBrasilComponent } from './alfabetos/alfa-brasil/alfa-brasil.component';
import { AlfabetoComponent } from './alfabetos/alfabeto/alfabeto.component';

@NgModule({
  declarations: [
    AppComponent,
    ArgentinaComponent,
    BrasilComponent,
    AlfaArgentinaComponent,
    AlfaBrasilComponent,
    AlfabetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
