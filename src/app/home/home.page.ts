import { Component } from '@angular/core';
import { Cancion } from '../interface/cancion.modelo';
import { CancionService } from '../services/cancion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  canciones: Cancion[] = [];

  constructor(private CancionService: CancionService) {}

  ngOnInit(): void {   
    this.canciones = this.CancionService.getAll();
  }

}
