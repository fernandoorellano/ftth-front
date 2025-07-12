import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { EdicionComponent } from './paginas/edicion/edicion.component';
import { CrearComponent } from './paginas/crear/crear.component';
import { ListadoPageComponent } from './paginas/listado-page/listado-page.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { ListadopagoComponent } from './componentes/listadopago/listadopago.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    EdicionComponent,
    CrearComponent,
    ListadoPageComponent,
    ListadoComponent,
    ListadopagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


function provideHttpClient(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

