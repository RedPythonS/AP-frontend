import { Component,  ElementRef,  Input,  OnInit,  SimpleChanges,  ViewChild } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent  implements OnInit {

  modalSwitch_crear_habilidad:boolean = false;
  

  constructor(private modalService: SwitchService) { }

  ngOnInit(){

    this.modalService.$modal_crear_habilidad.subscribe((valor) => {this.modalSwitch_crear_habilidad = (valor)});
    
  }

  openModal_c_hab() {
    this.modalSwitch_crear_habilidad = true;
  }

}

