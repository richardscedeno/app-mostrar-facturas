import { ServicioService } from 'src/app/servicios/servicio.service';
import { IProducto } from './../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  listaProductos!: Observable<IProducto[]>

  constructor( private service:ServicioService ) { }

  ngOnInit() {
    this.listaProductos = this.service.getProductos()
  }

}
