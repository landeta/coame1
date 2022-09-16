import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../../models/blog';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-list-documento',
  templateUrl: './list-documento.component.html',
  styleUrls: ['./list-documento.component.css']
})
export class ListDocumentoComponent implements OnInit {
  @Input('') control ="control";
  //blogs:any; //
  public blogs: Blog[] = [new Blog(1,"", "","","","","",0,"",true,"")];
 
  constructor(private blogService: BlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBlog();
  }
  getBlog(){
     this.blogService.getBlogs().subscribe(res => {
          this.blogs = res;
          console.log('veamos que sale:  ', this.blogs);
      } )
  }

  deleteBlog(id:any){
    console.log('borro??== ', id)
      this.blogService.deleteBlog(id).subscribe(() => {
      } )
      console.log('borre');
      this.goBack();
  }
  goBack(){
    this.router.navigate(['/control/list']);
 }

}
