import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from 'src/app/services/trabajador.service';
import { FormBuilder } from '@angular/forms';
import { Trabajador } from 'src/app/interface/trabajador.modelo';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formulario = this.Formulario.group({
    nombre: '',
    apellido: '',
    puesto: '',
    salario:null,
  })

  constructor(private Formulario: FormBuilder, private TrabajadorService: TrabajadorService) { }

  ngOnInit(): void {
  }

  guardar() {
    let nuevoTrabajador : Trabajador = {
      nombre:this.formulario.get('nombre')?.value,
      apellido:this.formulario.get('apellido')?.value,
      puesto:this.formulario.get('puesto')?.value,
      salario:this.formulario.get('salario')?.value,
    }
    //Añade el usuario en user Service
    this.TrabajadorService.addTrabajador(nuevoTrabajador);
    this.limpiarForm();
  }

  limpiarForm() {
    this.formulario.reset();
  }
}
