import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from 'src/app/interfaces/interfaces';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  listaMenu!: Observable<IMenu[]>

  constructor( private service:ServicioService ) { }

  ngOnInit() {
    this.listaMenu = this.service.getMenu()
  }
}
