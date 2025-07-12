import { Component, OnInit } from '@angular/core';
import { Abonado } from 'src/app/interfaces/abonado';
import { ApiserviceService } from 'src/app/servicios/apiservice.service';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  descripcion = "";
  fecha = "";
  pon = "";
  pagoMayo = "";
  pagoJunio = "";
  pagoJulio = "";

  constructor(public apiService: ApiserviceService, public listadoServ: ListadoService) { }

  ngOnInit(): void {
      this.apiService.obtenerDatosApi();
     
  }

  crearAbonado(descripcion: string, fecha: string, pon: string, pagoMayo: string, pagoJunio: string, pagoJulio: string){

    const nuevoAbonado: Abonado = {
      descripcion: descripcion,
      fecha: fecha,
      pon: pon,
      pagoMayo: pagoMayo,
      pagoJunio: pagoJunio,
      pagoJulio: pagoJulio,
      pagoAgosto: "",
      pagoSeptiembre: "",
      pagoOctubre: "",
      pagoNoviembre: "",
      pagoDiciembre: ""
    }

    this.apiService.crearAbonado(nuevoAbonado).subscribe(
      res => { this.apiService.guardarDatosApi(res)
      },
      err => { console.log(err) }
    );
    nuevoAbonado.descripcion="", nuevoAbonado.fecha ="", nuevoAbonado.pon =""

  }


}
