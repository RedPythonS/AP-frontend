import { Component,  ElementRef,  Input,  OnInit,  SimpleChanges,  ViewChild } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';
import { Habilidad } from 'src/app/modelos/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})
export class HabilidadComponent  implements OnInit {

  modalSwitch_crear_habilidad:boolean = false;
  habilidades : Habilidad[] = [];
  

  constructor(
    private modalService: SwitchService,
    private toastr: ToastrService,
    private router: Router,
    private servicioHabilidad: HabilidadService
    ) { }

  ngOnInit(){
    this.listarHabilidad();
    this.modalService.$modal_crear_habilidad.subscribe((valor) => {this.modalSwitch_crear_habilidad = (valor)});
    
  }

  openModal_c_hab() {
    this.modalSwitch_crear_habilidad = true;
  }

  listarHabilidad(): void{
    this.servicioHabilidad.lista().subscribe(
      { 
        next: (data) => this.habilidades = data,
        error: (e) => console.error(e),
        complete: () => console.info('Lista mostrada')
      }
    )
  }

}

