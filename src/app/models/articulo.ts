export class Articulo {
    constructor(
        public idArticulo: number,
        public categoria: string,
        public titulo: string,
        public subtitulo: string,
        public autor: string,
        public fecha: string,
        public texto: string,
        public comentario: number,
        public imagen: string,
        public estado: boolean,
        public tags: string,
    ) { }
}
