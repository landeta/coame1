import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Blog } from '../../models/blog';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn:'root'
})
export class BlogsService {
  checkMe:any;
  res: any;
  //baseUrl="http://localhost/coame";
  baseUrl="http://coame.com.ar/coame";
  stringJson: any;
  stringObject: any;

  constructor(private http:HttpClient) { 
   
  }
  
  
  getBlogs(){
    return this.http.get(`${this.baseUrl}/getBlogs.php`).pipe(
      map( res => {
        this.checkMe = res;     
        if(this.checkMe._body !== "0"){
          console.log('getBlogs.....', this.checkMe);
            return this.checkMe;
        }        
      }));
  }
   addBlog(info: Blog){
    console.log('Estos son los datos de info:  ', info );
    
     return this.http.post(`${this.baseUrl}/insertBlog.php`,JSON.stringify(info) );
   }
   getBlog(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idMascota=${id}`);
  }
//   console.log('Estos son los datos de info stringifi:  ', JSON.stringify( info ) );
//    console.log('Estos son los datos de info stringifi:  ', JSON.parse( JSON.stringify( info ) ) );
//   getBlog(id:any){
//     return this._http.post("http://localhost/api/selectone.php/",{'id':id}).pipe(
//       map(res=>res.json()));
//   }
  deleteBlog(id: any){
    return this.http.post(`${this.baseUrl}/api/delete.php/`,{'id':id}).pipe(
      map(()=>this.getBlogs()));
  }
//   updateEmployee(info){
//     return this._http.post("http://localhost/api/update.php/", info)
//       .map(()=>"");
//   }
}
