import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/servicios/apiservice.service';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-listadopago',
  templateUrl: './listadopago.component.html',
  styleUrls: ['./listadopago.component.css']
})
export class ListadopagoComponent implements OnInit {

  fechaActual: any = new Date();

  constructor(public listadoServ: ListadoService) { }

  ngOnInit(): void {
  }

}
