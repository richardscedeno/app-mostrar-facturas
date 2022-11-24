import { ServicioService } from 'src/app/servicios/servicio.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {

  objCliente: any = []

  constructor( private modalCcontroller:ModalController, private service: ServicioService) { }

  ngOnInit() {
    true
  }

  save() {
    this.service.addClientes(this.objCliente)
    // console.log(this.objCliente)
    this.service.message("Se añadió con exíto", "success")
    this.close()
  }

  close(){
    this.modalCcontroller.dismiss();
  }
}
