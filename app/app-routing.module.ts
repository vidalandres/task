import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaproductoComponent } from './componentes/listaproducto/listaproducto.component';
import { AgregarproductoComponent } from './componentes/agregarproducto/agregarproducto.component';
import { NuevafacturaComponent } from './componentes/nuevafactura/nuevafactura.component';
import { ListafacturaComponent } from './componentes/listafactura/listafactura.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: 'agregarproducto', component: AgregarproductoComponent},
  {path: 'listaproducto', component: ListaproductoComponent},
  {path: 'nuevafactura', component: NuevafacturaComponent},
  {path: 'listafactura', component: ListafacturaComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
