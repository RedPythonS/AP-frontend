export class Experiencia {
    id?:number;
    lugar:string;
    puesto:string;
    desde:string;
    hasta:string;
    descripcion:string;

    constructor(lugar:string, puesto:string, desde:string, hasta:string, descripcion:string) {
        this.lugar=lugar;
        this.puesto=puesto;
        this.desde=desde;
        this.hasta=hasta;
        this.descripcion=descripcion;
    }
}
