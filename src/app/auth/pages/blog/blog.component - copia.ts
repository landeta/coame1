import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Blog } from '../../../models/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  model = new Blog(1,"","","","","",0,"",false,"");
  categorias: any;

  constructor(
    private categoriaService: CategoriaService,
    private blgService: BlogService,
    private router: Router) { 
      this.getCategorias()      
  }
  
  ngOnInit(): void {
  }
  
  addBlog(){
      this.blgService.addBlog(this.model).subscribe();
      this.goBack();
  }
  
  goBack(){
     this.router.navigate(['/control']);
  }

  getCategorias(){
    this.categoriaService
       .getCategorias()
       .subscribe(res => {
         this.categorias = res;
         console.log('veamos las categorias:  ', this.categorias);
     })
  }
}