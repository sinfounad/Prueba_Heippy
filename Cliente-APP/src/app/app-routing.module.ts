import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {crearUsuComponent} from './components/crearUsu/crearUsu.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ActualUsuComponent } from './components/actual-usu/actual-usu.component';
import { PrincipalComponent } from './components/principal/principal.component';
const routes: Routes = [
  { path: '', component: PrincipalComponent},

  { path: 'crear', component: crearUsuComponent},
  {path: 'Contactos', component:  ContactosComponent},
  {path: 'Actualizar', component:  ActualUsuComponent},
  {path: 'principal', component:  PrincipalComponent},


  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
