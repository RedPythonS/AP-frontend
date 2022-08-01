import { Component,  ElementRef,  Input,  OnInit,  SimpleChanges,  ViewChild } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  modalSwitch_educacion:boolean = false;
  educaciones : Educacion[] = [];

  constructor(
    private modalService: SwitchService,
    private toastr: ToastrService,
    private router: Router,
    private servicioEducacion: EducacionService
  ) { }

  ngOnInit(): void {
    this.listarEducacion();
    this.modalService.$modal_educacion.subscribe((valor) => {this.modalSwitch_educacion = (valor)});
  }

  openModal() {
    this.modalSwitch_educacion = true;
  }

  listarEducacion(): void{
    this.servicioEducacion.lista().subscribe(
      { 
        next: (data) => this.educaciones = data,
        error: (e) => console.error(e),
        complete: () => console.info('Lista mostrada')
      }
    )
  }


}
