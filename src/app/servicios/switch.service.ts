import {EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  $modal = new EventEmitter<any>();

  $modal_crear_habilidad = new EventEmitter<any>();

  $modal_editar_acercade = new EventEmitter<any>();
}
