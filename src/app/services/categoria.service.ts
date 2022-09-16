import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  //baseUrl="http://localhost/coame";
  baseUrl="http://coame.com.ar/coame";
  categoria: any;
  constructor(private http: HttpClient) { }
  
  getCategorias(){
    return this.http.get(`${this.baseUrl}/getCategorias.php`).pipe(
      map( res => {
        this.categoria = res;     
            return this.categoria;    
      }));
  }

}
