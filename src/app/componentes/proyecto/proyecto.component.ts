import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  modalSwitch:boolean = false;

  
  

  constructor(private modalService: SwitchService) { }

  ngOnInit(){

    this.modalService.$modal.subscribe((valor) => {this.modalSwitch = (valor)});

    
    
  }

  openModal() {
    this.modalSwitch = true;
  }

  

}
