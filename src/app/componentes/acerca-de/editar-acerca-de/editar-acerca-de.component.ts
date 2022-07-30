import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  constructor(private modalService: SwitchService) { }

  ngOnInit(): void {
  }

  closeModal() {
    //this.modalService.$modal_crear_habilidad.emit(false);
    this.modalService.$modal_editar_acercade.emit(false);
  }

}
