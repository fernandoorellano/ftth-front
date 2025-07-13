import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/servicios/apiservice.service';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(public listadoServ: ListadoService, public apiService: ApiserviceService) { }
    
  
    ngOnInit(): void {}
  
  
    guardarCambios(abonado: any){
      console.log(abonado)
          for (let index = 0; index < this.apiService.publicacionesBdApi.length; index++) {
            if( this.apiService.publicacionesBdApi[index].id  == abonado.id){
                this.apiService.guardarPublicacionMayo(abonado).subscribe(
                  res => { this.apiService.guardarDatosApi(res)},
                  err => { console.log(err) }
                );
            }
        }
    }
  
    eliminar(abonado: any){
        for (let index = 0; index < this.apiService.publicacionesBdApi.length; index++) {
            if( this.apiService.publicacionesBdApi[index].id  == abonado.id){
              this.apiService.publicacionesBdApi[index].descripcion = "";
              this.apiService.publicacionesBdApi[index].fecha = "";
              this.apiService.publicacionesBdApi[index].pon = "";
              this.apiService.publicacionesBdApi[index].pagoMayo = "";
              this.apiService.publicacionesBdApi[index].pagoJunio = "";
              this.apiService.publicacionesBdApi[index].pagoJulio = "";
              this.apiService.publicacionesBdApi[index].pagoAgosto = "";
              this.apiService.publicacionesBdApi[index].pagoSeptiembre = "";
              this.apiService.publicacionesBdApi[index].pagoOctubre = "";
              this.apiService.publicacionesBdApi[index].pagoNoviembre = "";
              this.apiService.publicacionesBdApi[index].pagoDiciembre = "";
              this.apiService.guardarPublicacionMayo(abonado).subscribe(
                  res => { this.apiService.guardarDatosApi(res)},
                  err => { console.log(err) }
                );
            }
        }
    }

}
