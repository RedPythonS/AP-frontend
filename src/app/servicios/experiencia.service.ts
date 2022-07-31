import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = 'http://localhost:8080/experiencia/'

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpCliente.get<Experiencia[]>(this.experienciaURL+'ver/experiencias');
  }

  public mostrarExperiencia(id:number): Observable<Experiencia>{
    return this.httpCliente.get<Experiencia>(this.experienciaURL+'obtener/experiencia/${id}');
  }

  public crearExperiencia(experiencia:Experiencia): Observable<any>{
    return this.httpCliente.post<any>(this.experienciaURL+'crear', experiencia);
  }

  public actualizarExperiencia(id:number, experiencia:Experiencia): Observable<any>{
    return this.httpCliente.put<any>(this.experienciaURL+'actualizar/${id}', experiencia);
  }

  public borrarExperiencia(id:number):Observable<any>{
    return this.httpCliente.delete<any>(this.experienciaURL+'borrar/${id}');
  }
}
