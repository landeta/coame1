import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

import { catchError, map  } from 'rxjs/operators';
import { Articulo } from '../models/articulo';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
    // API url
    baseApiUrl = "http://coame.com.ar/coame/upload_ftp.php"
    articulo=[];
    checkMe:any;
    algo:any;
    id: any;
    //baseUrl="http://localhost/coame";
    baseUrl="http://coame.com.ar/coame";
    
    constructor(private http: HttpClient,
                private router: Router) {
    }
    getArticulos(){
        return this.http.get(`${this.baseUrl}/selectArt.php`).pipe(
          map( res => {
            this.checkMe = res;     
            if(this.checkMe._body !== "0"){
              console.log('articuloService..............', this.checkMe);
                return this.checkMe;
            }        
          }));
    }
    deleteArticulos(id:any){
      return this.http.post(`${this.baseUrl}/deleteArt.php`,{'id':id})
          .pipe(map(()=>this.getArticulos()));
    }
      
  
      showArticulo(id:any) {
        console.log('ID articulos.Service->que devuelve??  :  ', this.http.post(`${this.baseUrl}/getArticulo.php`, id) );
        return this.http.post(`${this.baseUrl}/getArticulo.php`, JSON.stringify(id));
      }
      // Ejemplo de un paso de parametros que funciona
      //  addBlog(info: Blog){
      //   console.log('Estos son los datos de info:  ', info );  
      //    return this.http.post(`${this.baseUrl}/insert.php`,JSON.stringify(info) );
      //  }
  
      showArticulos() {
        return this.http.get(`${this.baseUrl}/getArticulos.php`).pipe(
        map((res:any) => {
          this.checkMe = res;
          // tslint:disable-next-line:one-line
          if (this.checkMe._body !== '0') {
            console.log('veo que sale: ', res);
            return res;
          }
  
      }));
  
    }
    addArticulo(info: Articulo){
      console.log('Datos para insert:  ', info );
      return this.http.post(`${this.baseUrl}/insertArticulo.php`, JSON.stringify(info));
     }
     updateArticulo(info: Articulo){
      console.log('Datos para update:  ', info );
      return this.http.post(`${this.baseUrl}/updateArticulo.php`, JSON.stringify(info));
    }
    deleteArticulo(id:any){
      return this.http.get(`${this.baseUrl}/deleteArticulo.php?id=${id}`)
      .pipe(map(()=>this.goBack()));
        
    }


    imageUpload(categoria: string,
                  autor: string,
                  fecha:string,
                  titulo:string,
                  subtitulo:string,
                  texto:string,
                  comentarios:string,
                  estado:string,
                  tags:string,
                  profileImage: File
                ):Observable<any> {
            var formData: any = new FormData();
            formData.append("categoria", categoria);
            formData.append("autor", autor);
            formData.append("fecha", fecha);
            formData.append("titulo", titulo);
            formData.append("subtitulo", subtitulo);
            formData.append("texto", texto);
            formData.append("comentarios", comentarios);
            formData.append("estado", estado);
            formData.append("tags", tags);
            formData.append("fileToUpload", profileImage);
            return this.http.post('http://coame.com.ar/coame/singleArticulo.php',
            formData,{
              reportProgress: true,
              observe: 'events'
            }).pipe(
              catchError((err: any)=>{
                alert(err.message);
                return throwError(err.message);
              })
            )
    }

    goBack(){
      this.router.navigate(['/control/list']);
    }
 }
 





function res(res: any): void {
  throw new Error('Function not implemented.');
}
//   addEmployee(info){
//     return this._http.post("http://localhost/api/insert.php",info)
//       .map(()=>"");
//   }
//   getBlog(id:any){
//     return this._http.post("http://localhost/api/selectone.php/",{'id':id}).pipe(
//       map(res=>res.json()));
//   }
  
//   updateEmployee(info){
//     return this._http.post("http://localhost/api/update.php/", info)
//       .map(()=>"");
//   }