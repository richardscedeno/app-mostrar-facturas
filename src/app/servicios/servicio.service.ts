import { Observable, of } from 'rxjs';
import { IProducto, ICliente, IFactura, IMenu } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  // private listaProductos:IProducto[];
  private listaClientes:ICliente[] = [];
  // private cli:ICliente[];
  private listaFacturas:IFactura[] = []; 

  constructor( private http:HttpClient, private toastController:ToastController ) {

  }

  // getClientesObs(): Observable<ICliente[]> {
  //   const url = "../../assets/data/Clientes.json"
  //   // return this.http.get<ICliente[]>(url)

  //   const data = this.http.get<ICliente[]>(url)

  //   data.subscribe(client => {
  //     this.cli = client
  //   })

  //   return of(this.cli)
  // }

  getMenu() {
    const url = "../../assets/data/Menu.json"
    return this.http.get<IMenu[]>(url)
  }

  getClientes() {
    const url = "../../assets/data/Clientes.json"
    // return this.http.get<ICliente[]>(url)

    if( this.listaClientes.length !== 0) {
      // console.log('Ya tiene datos', this.listaClientes)
      // console.log('Longitud ya tenia: ', this.listaClientes.length)   
      return this.listaClientes
    }

    this.http.get<ICliente[]>(url).subscribe(response => {
      // Seteamos la listaClientes privada
      this.listaClientes = response
      // console.log('Data seteada', this.listaClientes)
      // console.log('Longitud seteada: ', this.listaClientes.length)   
      return this.listaClientes
    })
  }

  getProductos() {
    const url = "../../assets/data/Productos.json"
    return this.http.get<IProducto[]>(url)
  }

  addClientes(cliente: any){
    this.listaClientes.push(cliente);
  }

  async message(msg: string, miColor:string) {
    const toast = await this.toastController.create({
      message:msg,
      color:miColor,
      duration:1500
    })

    toast.present()
  }

  getFacturas() {
    const url = "../../assets/data/Factura.json"

    if ( this.listaFacturas.length !== 0) {
      // console.log('Ya tenía datos', this.listaFacturas)
      return this.listaFacturas
    }

    const data = this.http.get<IFactura[]>(url)
    data.subscribe(facturas => {
      this.listaFacturas = facturas
      // console.log('Seteado', this.listaFacturas)
      return this.listaFacturas
    })
  }

  searchFact(nFactura: string) {
    const Factura = this.listaFacturas.filter( factura => {
      return factura.numFac === nFactura
    })
    return Factura
  }
}
