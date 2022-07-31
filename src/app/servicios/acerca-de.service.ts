import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from '../modelos/acercade';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  acercaDeURL = 'http://localhost:8080/acercade/'

  constructor(private httpCliente: HttpClient ) { }

  public lista(): Observable<Acercade[]>{
    return this.httpCliente.get<Acercade[]>(this.acercaDeURL+'ver/acercade');
  }

  public mostrarAcercade(id:number): Observable<Acercade>{
    return this.httpCliente.get<Acercade>(this.acercaDeURL+'obtener/persona/${id}');
  }

  public actualizarAcercade(id:number, acercade:Acercade):Observable<any>{
    return this.httpCliente.put<any>(this.acercaDeURL+'actualizar/${id}', acercade)
  }
}
