export class Habilidad {

    id?:number;
    nombre:string;
    detalle:string;
    nivel:number;

    constructor(nombre:string, detalle:string, nivel:number) {
        this.nombre=nombre;
        this.detalle=detalle;
        this.nivel=nivel;
    }
}

