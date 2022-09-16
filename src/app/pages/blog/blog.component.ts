import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { BlogService } from '../../services/blog.service';


 
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  public blog:any;
  public totalBlogs: number = 0;
  public totalFechas: number = 0;
  public blogs: any;
  public blogsTemp: any;
  public popular:any;
  public fecha:any;
  public cuenta!: number;
  public titular!: string;
  public buttUp!: boolean;
  public buttDown!: boolean;
  public desde: number = 0;
  public cargando: boolean = true;
  constructor(    
    private blogService: BlogService,
    private router: Router
   ) { 
    this.titular= "General";
    this.buttUp= false;
    this.buttDown= true;

   }

  ngOnInit() {
    // Verifico si titular, si es general (1ra vez), leo getBlogs para ver la cantidad 
    //de blogs que tengo y cargo todos los Blogs con showBlog('')
    if(this.titular==='General'){
      this.getBlogs();
      this.showBlogsFechaCat('General');
    } else{
    // si this.titular es otro solo cargo los blogs de esos titulares
      this.showBlogsFechaCat(this.titular);
    }
    //llamo a las funciones que me dan el número de blogs por categoria y fecha
    this.getBlogsCategoria();
    this.getBlogsFecha();
  }

  getBlogs(){    
     this.blogService.getBlogs()
        .subscribe(blog => {
          this.totalBlogs = blog.length;
          console.log('getBlogs():', this.totalBlogs);
      } )
  }
  getBlogsCategoria(){
    this.blogService.getBlogsCategoria()
        .subscribe(popular => {
          this.popular = popular;
          console.log('getBlogsCategoria()', this.popular);
      } )
  }
  getBlogsFecha(){
    this.blogService.getBlogsFecha()
        .subscribe(fecha => {
          this.fecha = fecha;
          console.log('getBlogsFecha()', this.fecha);
      } )
  }
    //Muestra los blog de a 5 ya sea todos
  // o filtrados por categoria data lleva la categoria
  showBlogsFechaCat(data:string) {
    this.blogService.showBlogsFechaCat( this.desde, data )
      .subscribe( (blogs: any ) => {
        console.log('showBlogsFechaCat(data:string): ', blogs);
        this.blog = blogs;        
    })
  }

  

  cambiarBlogs( valor: number ) {
    this.desde += valor;
    if ( this.desde < 0 ) {
      this.desde = 0;
      this.buttDown=true;
      this.buttUp=false;
    } else if ( this.desde >= this.totalBlogs ) {
      this.desde -= valor;
      this.buttUp= true;
      this.buttDown=false;
    }
    if((this.desde-5)>= 0){
      this.buttDown=false;
    }
    if((this.desde+5)< this.totalBlogs){
      this.buttUp= false;
    }
    console.log('cambiarBlogs( valor: number ) ', this.desde);
    this.showBlogsFechaCat(this.titular);
  }
  buscar( termino: string ) {
    // if ( termino.length === 0 ) {
    //   return this.usuarios = this.usuariosTemp;
    // }
    // this.busquedasService.buscar( 'usuarios', termino )
    //     .subscribe( resp => {

    //       this.usuarios = resp;

    //     });
  }

  refresco(dato: string, cuenta: number){
    console.log('refresco: ', dato);
    this.desde=0;
    this.titular= dato;
    this.totalBlogs= cuenta;
    this.ngOnInit();
  }
  refrescoFecha(dato: string, cuenta: number){
    console.log('refresco: ', dato);
    this.desde=0;
    this.titular= dato;
    this.totalBlogs= cuenta;
    this.ngOnInit();
  }

}
