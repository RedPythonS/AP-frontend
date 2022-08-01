import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/servicios/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ApFront';



  modalSwitch:boolean = false;

  constructor(private modalService: SwitchService) {}

  public ngOnInit(): void {
    //this.updateProgress();
    this.modalService.$modal.subscribe((valor) => {this.modalSwitch = (valor)});
  }

  openModal() {
    this.modalSwitch = true;
  }
}
