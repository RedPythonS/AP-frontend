import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../modelos/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = 'http://localhost:8080/proyecto/'

  constructor(private httpCliente: HttpClient) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpCliente.get<Proyecto[]>(this.proyectoURL+'ver/proyectos');
  }

  public mostrarProyecto(id:number): Observable<Proyecto>{
    return this.httpCliente.get<Proyecto>(this.proyectoURL+'obtener/proyecto/${id}');
  }

  public crearProyecto(proyecto:Proyecto): Observable<any>{
    return this.httpCliente.post<any>(this.proyectoURL+'crear', proyecto);
  }

  public actualizarProyecto(id:number, proyecto:Proyecto): Observable<any>{
    return this.httpCliente.put<any>(this.proyectoURL+'actualizar/${id}', proyecto);
  }

  public borrarProyecto(id:number):Observable<any>{
    return this.httpCliente.delete<any>(this.proyectoURL+'borrar/${id}');
  }
}
