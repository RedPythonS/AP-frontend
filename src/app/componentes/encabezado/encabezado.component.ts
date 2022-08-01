import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';
import { ToastrService } from 'ngx-toastr';
import { Encabezado } from 'src/app/modelos/encabezado';
import { EncabezadoService } from 'src/app/servicios/encabezado.service'

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  modalSwitch_encabezado:boolean = false;
  encabezado = new Encabezado('','','','','','','');

  constructor(
    private modalService: SwitchService,
    private servicioEncabezado: EncabezadoService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = 1;
    this.servicioEncabezado.mostrarEncabezado(id).subscribe(
      { 
        next: (data) => this.encabezado = data,
        error: (e) => {
          this.toastr.error(e.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        },
        complete: () => console.info('Lista mostrada')
      }
    );
  }

  openModal_encabezado() {
    this.modalSwitch_encabezado = true;
  }

}
