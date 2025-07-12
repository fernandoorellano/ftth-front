import { Injectable } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  fecha : any = new Date();
  fechaDiaActualNumerica = this.fecha.getDate();

  mensajePagoActual : any = [];
  mensajePagoUnDia : any = [];
  mensajePagoDosDias : any = [];
  mensajePagoTresDias : any = []; 

  constructor() { }

  calculoDiaRestante(datos: any){
    
    for (let index = 0; index < datos.length; index++) {
      
       if((datos[index].fecha.slice(0, 2) == this.fechaDiaActualNumerica) && (datos[index].pagoJulio != "p") ){
        
        this.mensajePagoActual.push(datos[index].id);
        
      }
    }
  }


  reiniciarCalculoDias(){
    this.mensajePagoActual = []
  }



}
