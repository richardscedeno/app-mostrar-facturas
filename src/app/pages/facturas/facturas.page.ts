import { IFactura } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
})
export class FacturasPage implements OnInit {

  nFactura: string
  listFacturas: any
  facturaEncontrada: any

  constructor( private service: ServicioService ) { }

  ngOnInit() {
    this.listFacturas = this.service.getFacturas()
    // console.log('Desde ts',this.listFacturas)
  }

  searchFac() {
    this.facturaEncontrada = this.service.searchFact(this.nFactura)
    // console.log(this.facturaEncontrada)
  }

}
