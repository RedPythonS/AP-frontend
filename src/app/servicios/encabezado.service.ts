import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encabezado } from '../modelos/encabezado';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {

  encabezadoURL = 'http://localhost:8080/persona/'

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Encabezado[]>{
    return this.httpCliente.get<Encabezado[]>(this.encabezadoURL+'ver/personas');
  }

  public mostrarEncabezado(id:number): Observable<Encabezado>{
    return this.httpCliente.get<Encabezado>(this.encabezadoURL+`obtener/persona/${id}`);
  }

  public actualizarEncabezado(id:number, encabezado:Encabezado): Observable<any>{
    return this.httpCliente.put<any>(this.encabezadoURL+`actualizar/${id}`, encabezado);
  }


}
