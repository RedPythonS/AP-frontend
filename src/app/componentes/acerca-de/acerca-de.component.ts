import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  modalSwitch_editar_acercade:boolean = false;

  constructor(private modalService: SwitchService) { }

  ngOnInit(): void {
    //this.modalService.$modal_crear_habilidad.subscribe((valor) => {this.modalSwitch_crear_habilidad = (valor)});
    this.modalService.$modal_editar_acercade.subscribe((valor) => {this.modalSwitch_editar_acercade = (valor)});
  }

  openModal() {
    this.modalSwitch_editar_acercade = true;
  }

}
