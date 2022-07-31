export class Educacion {
    id?:number;
    lugar:string;
    titulo:string;
    desde:string;
    hasta:string;

    constructor(lugar:string, titulo:string, desde:string, hasta:string) {
        this.lugar=lugar;
        this.titulo=titulo;
        this.desde=desde;
        this.hasta=hasta;
    }
}
