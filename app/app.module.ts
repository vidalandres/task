import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductoService } from './servicios/producto.service';
import { AgregarproductoComponent } from './componentes/agregarproducto/agregarproducto.component';
import { ListaproductoComponent } from './componentes/listaproducto/listaproducto.component';
import { NuevafacturaComponent } from './componentes/nuevafactura/nuevafactura.component';
import { ListafacturaComponent } from './componentes/listafactura/listafactura.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarproductoComponent,
    ListaproductoComponent,
    NuevafacturaComponent,
    ListafacturaComponent,
    AcercadeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
