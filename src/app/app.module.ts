//modulos angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//componentes angular
import { AppComponent } from './app.component';

//mis modulos
import { SharedModule } from './shared/shared.module';
import { PaisesModule } from './paises/paises.module';
import { AlfabetoModule } from './alfabetos/alfabeto.module';

//mis componentes
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PaisesModule,
    AlfabetoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
