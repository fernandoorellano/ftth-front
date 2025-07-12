import { Component, OnInit } from '@angular/core';
import { ListadoService } from 'src/app/servicios/listado.service';

@Component({
  selector: 'app-listado-page',
  templateUrl: './listado-page.component.html',
  styleUrls: ['./listado-page.component.css']
})
export class ListadoPageComponent implements OnInit {

  constructor(public listadoServ: ListadoService) { }

  ngOnInit(): void {
    this.listadoServ.reiniciarCalculoDias();
  }

}
