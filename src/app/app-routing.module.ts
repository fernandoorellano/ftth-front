import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { EdicionComponent } from './paginas/edicion/edicion.component';
import { CrearComponent } from './paginas/crear/crear.component';
import { ListadoPageComponent } from './paginas/listado-page/listado-page.component';


const routes: Routes = [
    {path: "",  redirectTo: "inicio", pathMatch: "full"},
    {path: "inicio", component: InicioComponent},
    {path: "listado", component: ListadoPageComponent},
    {path: "edicion", component: EdicionComponent},
    {path: "crear", component: CrearComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }