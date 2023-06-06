import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgentinaComponent } from './paises/argentina/argentina.component';
import { BrasilComponent } from './paises/brasil/brasil.component';
import { AlfaArgentinaComponent } from './alfabetos/alfa-argentina/alfa-argentina.component';
import { AlfaBrasilComponent } from './alfabetos/alfa-brasil/alfa-brasil.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'argentina', component: ArgentinaComponent },
  { path: 'brasil', component: BrasilComponent },
  { path: 'alfa-argentina', component: AlfaArgentinaComponent },
  { path: 'alfa-brasil', component: AlfaBrasilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
