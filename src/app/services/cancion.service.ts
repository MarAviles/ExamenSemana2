import { Injectable } from '@angular/core';
import { Cancion } from '../interface/cancion.modelo';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  canciones: Cancion[] = [
    {
      img: 'img_1.jpg',
    titulo: 'Sparks',
    artista: 'Coldplay',
    album: 'Parachutes'
    },
    {
      img: 'img_2.jpg',
    titulo: 'De miércoles al martes',
    artista: 'El Kanka',
    album: 'El día de suerte'
    },
    {
      img: 'img_3.jpg',
    titulo: 'Vals en la bemol Op 69 No.1',
    artista: 'Chopin',
    album: 'The Essentials'
    },
    {
      img: 'img_4.jpg',
    titulo: 'Peace',
    artista: 'Taylor Swift',
    album: 'Folklore'
    },
    {
      img: 'img_5.jpg',
    titulo: 'Angel',
    artista: 'Kings Of Convenience',
    album: 'Peace or Love'
    }
  ];

  constructor() { }

  getAll(){
    return this.canciones;
  }
}
