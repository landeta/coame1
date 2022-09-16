export class Comentario {
        constructor(
        public idComentario: number,
        public idArt: number,
        public nombre: string,
        public email: string,
        public texto: string,
        public fecha: string,
        ){}
}
