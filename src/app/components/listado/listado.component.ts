import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/interface/trabajador.modelo';
import { TrabajadorService } from 'src/app/services/trabajador.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  trabajadores: Trabajador[] = [];

  constructor(private TrabajadorService: TrabajadorService) { }

  ngOnInit(): void {
    this.trabajadores = this.TrabajadorService.getAll();
  }

  borrar(){
    this.TrabajadorService.borrar();
  }

}
