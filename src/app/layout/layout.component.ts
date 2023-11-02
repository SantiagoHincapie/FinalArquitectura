import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Ciudadano } from '../interfaces/data.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  public cedula!: number;
  public ciudadanos: Ciudadano[] = [];

  public existencia: boolean = false;
  public visible: boolean = false;

  public datos = this.data.getData();

  constructor(private data: DataService) {}

  //IMPORTANTE
  ngOnInit(): void {
    this.data.getData().subscribe((ciudadano) => (this.ciudadanos = ciudadano));
  }

  //IMPORTANTE
  recibirData(cedula: number) {
    this.cedula = cedula;
    this.existenciaUsuario(this.cedula);
  }

  //IMPORTANTE
  existenciaUsuario(id: number) {
    for (const iterator of this.ciudadanos) {
      if (id === iterator.id) {
        this.existencia = true;
        console.log(iterator.nombre);
        return;
      } else {
        console.log('El usuario ingresado no existe');
        this.visible = true;
        return;
      }
    }
  }

  alerta() {
    this.visible = true;
  }
}
