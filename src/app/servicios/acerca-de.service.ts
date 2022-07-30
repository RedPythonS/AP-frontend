import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  acrcaDeURL = 'http://localhost:8080/acercade'

  constructor(private httpCliente: HttpClient ) { }
}
