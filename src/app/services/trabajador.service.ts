import { Injectable } from '@angular/core';
import { Trabajador } from '../interface/trabajador.modelo';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  trabajadores: Trabajador[] = [];

  constructor() { }

  addTrabajador(trabajador: Trabajador){
    this.trabajadores.push(trabajador);
  }

  getAll(){
    return this.trabajadores;
  }

  borrar(){
    this.trabajadores.pop();
  }

  

}
