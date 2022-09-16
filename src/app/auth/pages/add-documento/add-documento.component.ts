import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { FormBuilder, FormGroup} from '@angular/forms';



import { ArticulosService } from '../../../services/articulos.service';
import { CategoriaService } from '../../../services/categoria.service';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-add-documento',
  templateUrl: './add-documento.component.html',
  styleUrls: ['./add-documento.component.css']
})
export class AddDocumentoComponent implements OnInit {
  model = new Articulo(1, "", "", "", "", "", "",0, "", false, "");
  categorias: any;
  datosUrl = "http://coame.com.ar/coame";
  form: FormGroup;
  public progress: number = 0;
  msgs: any;
  imgMsg: any;
  constructor(
    private articuloService: ArticulosService,
    private router: Router,
    private categoriaService: CategoriaService,
    private http: HttpClient,
    private fb: FormBuilder,) {
    this.form = this.fb.group({
      categoria:[''],
      autor:[''],
      titulo:[''],
      subtitulo:[''],
      fecha:[''],
      texto:[''],
      comentarios:[''],
      estado:[''],
      tags: [''],
      image: [null]
    })
  }

  ngOnInit(): void {
    this.getCategorias();
  }
  getCategorias() {
    this.categoriaService
      .getCategorias()
      .subscribe(res => {
        this.categorias = res;
        console.log('veamos las categorias:  ', this.categorias);
      })
  }
  onSubmit() {
    console.log('veamos el Articulo:  ', this.model);
    this.articuloService.addArticulo(this.model).subscribe();
    this.router.navigate(['/control']);
  }

  goBack() {
    this.router.navigate(['/control']);
  }


  uploadFile(event: any) {
    const file = event.target.files ? event.target.files[0] : '';
    console.log('Archivo:', file);
    this.form.patchValue({
      image: file
    });
    this.form.get('image')?.updateValueAndValidity()
    
  }

  submitImage() {
    console.log('submitImage():....',this.form.value);
    this.articuloService.imageUpload(
        this.form.value.categoria,
        this.form.value.autor,
        this.form.value.fecha,
        this.form.value.titulo,
        this.form.value.subtitulo,
        this.form.value.texto,
        this.form.value.comentarios,
        this.form.value.estado,
        this.form.value.tags,
        this.form.value.image
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:

          if (event.total) {
            this.progress = Math.round((100 / event.total) * event.loaded);
            this.msgs = `Uploaded! ${this.progress}%`
          }
          break;
          case HttpEventType.Response:
            //event.body;
            if(event.body.error){
              this.imgMsg = event.body.error
            } else if(event.body.success){
              this.imgMsg = event.body.success;
              this.form.reset;
              
              this.router.navigate(['/control']);
            }
            setTimeout(()=>{
              this.progress =0;
              this.msgs='';
            }, 1500);
            
      }
    })
  }
  

}
