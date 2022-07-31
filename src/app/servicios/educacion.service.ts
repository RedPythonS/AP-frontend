import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = 'http://localhost:8080/educacion/'

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpCliente.get<Educacion[]>(this.educacionURL+'ver/educaciones');
  }

  public mostrarEducacion(id:number): Observable<Educacion>{
    return this.httpCliente.get<Educacion>(this.educacionURL+'obtener/educacion/${id}');
  }

  public crearEducacion(educacion:Educacion): Observable<any>{
    return this.httpCliente.post<any>(this.educacionURL+'crear', educacion);
  }

  public actualizarEducacion(id:number, educacion:Educacion): Observable<any>{
    return this.httpCliente.put<any>(this.educacionURL+'actualizar/${id}', educacion);
  }

  public borrarEducacion(id:number):Observable<any>{
    return this.httpCliente.delete<any>(this.educacionURL+'borrar/${id}');
  }
}
