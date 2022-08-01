import { Component,  ElementRef,  Input,  OnInit,  SimpleChanges,  ViewChild } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  modalSwitch_experiencia:boolean = false;
  experiencias : Experiencia[] = [];

  constructor(
    private modalService: SwitchService,
    private toastr: ToastrService,
    private router: Router,
    private servicioExperiencia: ExperienciaService
  ) { }

  ngOnInit(): void {
    this.listarExperiencia();
    this.modalService.$modal_experiencia.subscribe((valor) => {this.modalSwitch_experiencia = (valor)});
  }

  openModal() {
    this.modalSwitch_experiencia = true;
  }

  listarExperiencia(): void{
    this.servicioExperiencia.lista().subscribe(
      { 
        next: (data) => this.experiencias = data,
        error: (e) => console.error(e),
        complete: () => console.info('Lista mostrada')
      }
    )
  }

}
