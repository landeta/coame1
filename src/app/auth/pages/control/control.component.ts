import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../../../models/blog';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  @Input('') control ="control";
  //blogs:any; //
  public blogs: Blog[] = [new Blog(1,"", "","","","","",0,"",true,"")];
 
  constructor(
    private blogService: BlogsService,
    private router: Router
  ) { }

  
    ngOnInit() {
      this.getBlog();
    }
    getBlog(){
       this.blogService
          .getBlogs()
          .subscribe(res => {
            this.blogs = res;
            console.log('veamos que sale:  ', this.blogs);
        } )
    }

    deleteBlog(id:any){
        this.blogService
          .deleteBlog(id)
          .subscribe(() => {
          this.getBlog();
        } )
    }

}
