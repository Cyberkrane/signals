import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ArgentinaComponent } from './paises/argentina/argentina.component';
import { BrasilComponent } from './paises/brasil/brasil.component';

@NgModule({
  declarations: [
    AppComponent,
    ArgentinaComponent,
    BrasilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
