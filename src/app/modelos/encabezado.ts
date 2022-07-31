export class Encabezado {
    id?:number;
    nombre:string;
    apellido:string;
    descripcion:string;
    lugar:string;
    contacto:string;
    linkImagenFondo:string;
    linkImagenFoto:string;

    constructor(nombre:string, apellido:string, descripcion:string, lugar:string, contacto:string, linkImagenFondo:string, linkImagenFoto:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.descripcion=descripcion;
        this.lugar=lugar;
        this.contacto=contacto;
        this.linkImagenFondo=linkImagenFondo;
        this.linkImagenFoto=linkImagenFoto;
    }
}
