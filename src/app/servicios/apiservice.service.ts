import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abonado } from '../interfaces/abonado';
import { ListadoService } from './listado.service';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  /*API_URL = 'http://localhost:4300';*/
  API_URL = "https://ftth-back.onrender.com";
  fechas: any = [];
  publicacionesBdApi: any = [];

constructor(private http: HttpClient, public listadoServ: ListadoService) {}

  mostrarPublicacionesMayo(){
      return this.http.get(`${this.API_URL}/abonados`);
  }

  guardarPublicacionMayo(nuevaPublicacion: Abonado){
    return this.http.put(`${this.API_URL}/abonados/${nuevaPublicacion.id}`, nuevaPublicacion);
  }

  crearAbonado(nuevoAbonado: Abonado){
    return this.http.post(`${this.API_URL}/abonados`, nuevoAbonado);
  }

/*------------------------------------------------------------------------------------------- */
/*------------------------------------------------------------------------------------------- */


  obtenerDatosApi(){
    this.mostrarPublicacionesMayo().subscribe(
      res => { this.guardarDatosApi(res), this.listadoServ.calculoDiaRestante(res)},
      err => { console.log(err) }
    );
       this.listadoServ.reiniciarCalculoDias();
  }

  guardarDatosApi(datos: any){
      for (let index = 0; index < datos.length; index++) {
          this.fechas[index] = datos[index].fecha;
          this.publicacionesBdApi[index] = datos[index];
      }
  }

}
