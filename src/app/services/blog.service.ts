import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Blog } from '../models/blog';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn:'root'
})

export class BlogService {
  // API url
  baseApiUrl = "http://coame.com.ar/coame/upload_ftp.php"
  blogs=[];
  checkMe:any;
  //baseUrl="http://localhost/coame";
  baseUrl="http://coame.com.ar/coame";
  
  constructor(private http: HttpClient,
              private router: Router) {
     
  }

  getBlogs(){
    return this.http.get(`${this.baseUrl}/getBlogs.php`).pipe(
      map( res => {
        this.checkMe = res;     
        if(this.checkMe._body !== "0"){
          console.log('Sev getBlogs()', this.checkMe);
            return this.checkMe;
        }        
      }));
  }
  getBlogsCat(item: string){
    return this.http.get(`${this.baseUrl}/getBlogsCat.php?cat=${item}`).pipe(
      map( res => {
        this.checkMe = res;     
        if(this.checkMe._body !== "0"){
          console.log('Serv getBlogsCat(item: string): ', this.checkMe);
            return this.checkMe;
        }        
      }));
  }
  showBlog( desde: number = 0 ) {
    return this.http.get(`${this.baseUrl}/getBlogs.php`).pipe(
      map( res => {
        console.log('Serv showBlogs(): ', this.checkMe);
        this.checkMe = res;
              }))
  }
  //Muestra los blog de a 5 ya sea todos
  // o filtrados por categoria
  showBlogsFechaCat(desde: number, data: string){
    //let dato:Date;
    let dato=Date.parse(data);
    console.log('veo',dato, '  ', data);
    if(dato){
      console.log('Es fecha.........', data,'desde :', desde);
     // return this.http.get(`${this.baseUrl}/showBlogsFecha.php?desde=${desde}&data=${data}`).pipe(
      return this.http.get(`${this.baseUrl}/selectBlogsFecha.php?desde=${desde}&data=${data}`).pipe(
          map( res => {
          this.checkMe = res;
          console.log('Servicio showBlogsFecha__(): ', this.checkMe);
          return this.checkMe;
        }))
    } else {
      console.log('No Es fecha.........');
      if(data==='General'){
        console.log('dato undefined');
        return this.http.get(`${this.baseUrl}/showBlogs.php?desde=${desde}`).pipe(
          map( res => {
            console.log('Serv showBlogsFechaCat_General(): ', res);
            this.checkMe = res;
            return this.checkMe;
          }))
      } else {
        console.log('dato DEFINIDO', data);
        return this.http.get(`${this.baseUrl}/showBlogsCat.php?desde=${desde}&data=${data}`).pipe(
          map( res => {
            console.log('Serv showBlogsFechaCat_Categoaria(): ', res);
            this.checkMe = res;
            return this.checkMe;
          }))
      }
    }
  }
  getBlogsCategoria(){
    return this.http.get(`${this.baseUrl}/getBlogCategoria.php`).pipe(
      map( res => {
        console.log('Serv getBlogsCategoria() ', res);
        this.checkMe = res;
        return this.checkMe;
      }))
  }
  getBlogsFecha(){
    return this.http.get(`${this.baseUrl}/getBlogFecha.php`).pipe(
      map( res => {
        console.log('Serv getBlogsFecha(): ', res);
        this.checkMe = res;
        return this.checkMe;
      }))
  }
  

  addBlog(info: Blog){
    console.log('Datos para insert:  ', info );
    return this.http.post(`${this.baseUrl}/insertBlog.php`, JSON.stringify(info));
   }
  getBlog(id: string | number) {
    return this.http.get(`${this.baseUrl}/getBlog.php?id=${id}`);
  }
  
  // getBlog(id:any){
  //       return this.http.post("http://localhost/api/getBlog.php/",{'id':id}).pipe(
  //         map(res=>res));
  //     }
  updateBlog(info: Blog){
    console.log('Datos para update:  ', info );
    return this.http.post(`${this.baseUrl}/updateBlog.php`, JSON.stringify(info));
  }
  deleteBlog(id:any){
    return this.http.get(`${this.baseUrl}/deleteBlog.php?id=${id}`)
    .pipe(map(()=>this.goBack()));
      
  }



//////////////////////////////////////////////////

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
      return this.http.post('http://coame.com.ar/coame/singleBlog.php',
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

  // function catchError(arg0:(err: any)=> any): import("rxjs").OperatorFunction<ImportAssertions("@angular/rxjs"){
  //   throw new Error('Funcion no implementada');
  //     /////////////////////////////////////////////////
  // }
//   addEmployee(info){
//     return this._http.post("http://localhost/api/insert.php",info)
//       .map(()=>"");
//   }
//  
  
//   updateEmployee(info){
//     return this._http.post("http://localhost/api/update.php/", info)
//       .map(()=>"");
//   }
