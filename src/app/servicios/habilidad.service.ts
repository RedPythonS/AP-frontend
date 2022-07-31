import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../modelos/habilidad'

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  habilidadURL = 'http://localhost:8080/habilidad/'

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Habilidad[]>{
    return this.httpCliente.get<Habilidad[]>(this.habilidadURL+'ver/habilidades');
  }

  public mostrarHabilidad(id:number): Observable<Habilidad>{
    return this.httpCliente.get<Habilidad>(this.habilidadURL+'obtener/habilidad/${id}');
  }

  public crearHabilidad(habilidad:Habilidad): Observable<any>{
    return this.httpCliente.post<any>(this.habilidadURL+'crear', habilidad);
  }

  public actualizarHabilidad(id:number, habilidad:Habilidad): Observable<any>{
    return this.httpCliente.put<any>(this.habilidadURL+'actualizar/${id}', habilidad);
  }

  public borrarHabilidad(id:number):Observable<any>{
    return this.httpCliente.delete<any>(this.habilidadURL+'borrar/${id}');
  }
}
