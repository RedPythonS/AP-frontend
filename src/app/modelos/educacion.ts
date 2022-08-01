export class Educacion {
    id?:number;
    lugar:string;
    titulo:string;
    desde:string;
    hasta:string;
    imagen:string;

    constructor(lugar:string, titulo:string, desde:string, hasta:string, imagen:string) {
        this.lugar=lugar;
        this.titulo=titulo;
        this.desde=desde;
        this.hasta=hasta;
        this.imagen=imagen;
    }
}
