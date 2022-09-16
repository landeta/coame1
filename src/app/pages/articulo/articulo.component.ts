import { Component, OnInit } from '@angular/core';

import { ArticulosService } from 'src/app/services/articulos.service';
import { ComentarioService } from 'src/app/services/comentario.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../../models/articulo';
import { Comentario } from '../../models/comentario';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  public id!: number;
  articulos: Articulo[] = [];
  public modelComentario = new Comentario(1,4,'','','','');
  articulo:any;
  comentarios: any;
  fotos: string[] = [];
  public dia = new Date().toISOString().slice(0, 10);
  // tslint:disable-next-line:no-inferrable-types
  desde: number = 1;
  // tslint:disable-next-line:no-inferrable-types
  totalRegistros!: number;
  // tslint:disable-next-line:no-inferrable-types
  public estado!: string ;
  public dato:any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public articuloService: ArticulosService,
    public comentarioService: ComentarioService
  ) { 
    // Con esta funcion this.route.snapshot.params['id']; recupero el parámetro "id"
    // que me pasaron desde el otro componente a travez de la ruta 
    // { path: 'articulo/:id', component: ArticuloComponent, de pages.routing.ts
    // y viene de la llamada <a routerLink="/dashboard/articulo/{{articulos[0].idArticulo}}" 
    // desde dashboard.componente.html
    this.showArticulo(this.route.snapshot.params['id']);
    this.showComentarios(this.route.snapshot.params['id']);
  }
  ngOnInit() {
    
   //this.armo();
  }

  showArticulo(id: number) {
    //this.showArticulo(this.route.snapshot.params['id']);
    this.articuloService.showArticulo(id)
    .subscribe( res => {
      this.articulo = res;
      //this.dato =Object.values(this.articulo);
      //this.articulo.map((elemento:any) => Object.entries(elemento));
      console.log('Articulos  : ',this.articulo, 'convierto', this.articulo["idArticulo"]);
      // this.fotos = res[0].foto.split(',');
      // console.log(this.fotos);
      // console.log(this.fotos.length);
    });
  }
  showComentarios(id: number) {
    this.comentarioService.showComentario(id)
    .subscribe( res => {
      this.comentarios = res;
    });
  }

  moverse(valor: number) {
    // tslint:disable-next-line:prefer-const
    let desde  = this.desde + valor;
    if ( desde === 0) {
     return;
    }
    if (  desde > this.totalRegistros) {
      this.estado = 'disabled';
      return;
    }
    this.desde += valor;
    this.showArticulo(valor);
  }
  addComentario(){
    this.modelComentario.idArt= this.articulo[0].idArticulo;
    this.modelComentario.fecha=this.dia;
    console.log("Comentario:   ", this.modelComentario);
    this.comentarioService.addComentario(this.modelComentario).subscribe();
    //this.http.post<string>(this.datosUrl, this.model.imagen);
    //this.goBack();
  }
   convierto(dato:any) {
    var obj = dato;
    var res = [];
      
    for(var i in obj)
        res.push(obj[i]);
      
    return "Array of values - ["+ res + "]";
    }
 
}


//   testData: any;
//   testDataShown: any;
//   iTestData!: number;
  
//   constructor(private myServices: ArticulosService) {}
//   ngOnInit() {
//     this.myServices.getArticulos().subscribe(
//       data => {
//         this.testData = data;
//         console.log("data: "+JSON.stringify(this.testData));//[{"id":1,"name":"First"},{"id":2,"name":"Second"},{"id":3,"name":"Third"},{"id":4,"name":"Fourth"},{"id":5,"name":"Fifth"},{"id":6,"name":"Sixth"},{"id":7,"name":"Seventh"},{"id":8,"name":"Eigth"},{"id":9,"name":"Ninth"}]
//       },
//       (err: HttpErrorResponse) => {
//         console.log("error on parsing: " + err.message);
//       }
//     );
//   }
//   setShownData(){
//     this.testDataShown = this.testData.slice(this.iTestData*6, (this.iTestData+1)*6);
// }
// previous() {
//   if(this.iTestData != 0) {
//     this.iTestData = this.iTestData - 1;
//     this.setShownData();
//   }
// }

// next() {
//   if( ((this.iTestData+1) * 6) < this.testData.length){
//     this.iTestData = this.iTestData + 1;
//     this.setShownData();
//   }
// }

// }



