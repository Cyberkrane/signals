import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgentinaComponent } from './paises/argentina/argentina.component';
import { BrasilComponent } from './paises/brasil/brasil.component';

const routes: Routes = [
  { path: 'argentina', component: ArgentinaComponent },
  { path: 'brasil', component: BrasilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
