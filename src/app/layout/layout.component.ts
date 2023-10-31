import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Ciudadano } from '../interfaces/data.interface';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  public cedula!: number;

  public datos = this.data.getData();
  

  constructor(private data: DataService) {}

  recibirData(cedula: number) {
    this.cedula = cedula;
    this.validar();
  }

  validar() {
    
    console.log(this.datos);
  }
}
