import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-sidebar-blog',
  templateUrl: './sidebar-blog.component.html',
  styleUrls: ['./sidebar-blog.component.css']
})
export class SidebarBlogComponent implements OnInit {

  
  public blog:any;
  public totalBlogs: number = 0;
  public blogs: any;
  public blogsTemp: any;
  public popular:any;
  public fecha:any;
  public dato!: string;
  public desde: number = 0;
  public cargando: boolean = true;
  constructor(    
    private blogService: BlogService,
    private router: Router
   ) { }

  ngOnInit() {
    this.getBlogs();
    this.showBlogs();
    this.getBlogsCategoria();
    this.getBlogsFecha();
  }

  getBlogs(){
    
     this.blogService.getBlogs()
        .subscribe(blog => {
          this.totalBlogs = blog.length;
          console.log('veamos que sale:  ', this.totalBlogs);
      } )
  }
  getBlogsCategoria(){
    this.blogService.getBlogsCategoria()
        .subscribe(popular => {
          this.popular = popular;
          console.log('veamos que sale:  ', this.popular);
      } )
  }
  getBlogsFecha(){
    this.blogService.getBlogsFecha()
        .subscribe(fecha => {
          this.fecha = fecha;
          console.log('veamos Fecha:  ', this.fecha);
      } )
  }
  showBlogs() {
    console.log('Desde 1:   ', this.desde);
    this.blogService.showBlogsFechaCat( this.desde, '')
      .subscribe( (blogs: any ) => {
        console.log('Blogs leidos: ', blogs);
        this.blog = blogs;
        this.blogsTemp = blogs;
        console.log('Blogs log: ', this.totalBlogs);
        
    })
  }
  cambiarBlogs( valor: number ) {
    console.log('Desde2:   ', this.desde);
    this.desde += valor;
    console.log('Desde3:   ', this.desde);
    if ( this.desde < 0 ) {
      this.desde = 0;
    } else if ( this.desde >= this.totalBlogs ) {
      this.desde -= valor; 
    }
    console.log('Desde4:   ', this.desde);
    this.showBlogs();
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

  refresco(){
    this.dato='Astronomia';
    this.ngOnInit();
  }

}
