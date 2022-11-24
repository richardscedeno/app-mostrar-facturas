import { ModalClientePage } from './../modal-cliente/modal-cliente.page';
import { ICliente } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  // listClientes: Observable<ICliente[]>;
  listClientes:ICliente[];
  objNuevo={}

  constructor(private service:ServicioService, private modalController: ModalController) { }

  ngOnInit() {
    this.listClientes = this.service.getClientes()

    // Con observable solo el get del json
    // this.service.getClientesObs().subscribe(client => {
    //   this.listClientes = of(client)
    //   console.log(this.listClientes)
    // })
  }

  async add() {
    const modal = await this.modalController.create({
      component: ModalClientePage,
      componentProps:{
        clientes:this.objNuevo,
      },
      
      showBackdrop:true,
      backdropDismiss:false
    })
    
    await modal.present()
  }
}
