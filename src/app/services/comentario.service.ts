import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Comentario } from '../models/comentario';
@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  baseUrl="http://coame.com.ar/coame";
  checkMe: any;
  constructor(private http:HttpClient)
  { }

  addComentario(info: Comentario){
        return this.http.post(`${this.baseUrl}/insertComentario.php`,JSON.stringify(info) );
  }
  showComentario(id:any) {
    console.log('ID articulos.Service->que devuelve??  :  ', this.http.post(`${this.baseUrl}/getArticulo.php`, id) );
     return this.http.post(`${this.baseUrl}/getComentario.php`, JSON.stringify(id));
   }
  showComentarios() {
    return this.http.get(`${this.baseUrl}/getComentarios.php`).pipe(
    map((res:any) => {
      this.checkMe = res;
      // tslint:disable-next-line:one-line
      if (this.checkMe._body !== '0') {
       console.log('veo comentarios: ', res);
       return res;
      }

    }));
  }
}
