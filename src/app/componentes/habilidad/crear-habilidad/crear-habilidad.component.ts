import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';

declare var window: any;

@Component({
  selector: 'app-crear-habilidad',
  templateUrl: './crear-habilidad.component.html',
  styleUrls: ['./crear-habilidad.component.css']
})
export class CrearHabilidadComponent {

  

  constructor(private modalService: SwitchService) { }

  ngOnInit(): void {

    //this.formModal = new bootstrap.Modal(document.getElementById('formModal'));

    //const myModal = new window.bootstrap.Modal(document.getElementById('myModal'));
  }

  closeModal() {
    this.modalService.$modal_crear_habilidad.emit(false);
    
  }

}
