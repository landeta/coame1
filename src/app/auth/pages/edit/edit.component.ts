import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { CategoriaService } from '../../../services/categoria.service';
import { Blog } from '../../../models/blog';
import { NgForm } from '@angular/forms';
  
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
// Variables
  public model = new Blog(1,"","","","","","",0,"",false,"");
  blog: any;
  categorias: any;
  id!: number;
// Constructro
  constructor(
    private categoriaService: CategoriaService,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute,) { 
  }
// OnInit
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getBlog(this.id);
    this.getCategorias() 
  }
// Funciones 
  addBlog(){
      this.blogService.addBlog(this.model).subscribe();
      this.goBack();
  }

  getCategorias(){
    this.categoriaService.getCategorias().subscribe(res => {
         this.categorias = res;
         console.log('veamos las categorias:  ', this.categorias);
     })
  }

  getBlog(id: number) {
    
    this.blogService.getBlog(id).subscribe( (res: any) => {
      this.blog = res[0];
      // console.log('El blog ::  ',this.blog);
    });
  }

  updateBlog() {
    this.blogService.updateBlog(this.blog).subscribe();
    this.goBack();
  }

  deleteBlog(id: any){
    this.blogService.deleteBlog(id).subscribe();
    this.goBack();
  }

  goBack(){
    this.router.navigate(['/control/list']);
 }

}