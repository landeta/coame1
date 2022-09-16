import { Component, OnInit } from '@angular/core';

import { ArticulosService } from 'src/app/services/articulos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-astronomia',
  templateUrl: './astronomia.component.html',
  styleUrls: ['./astronomia.component.css']
})
export class AstronomiaComponent implements OnInit {
  articulos: Articulo[] = [];
  articulo:any;
  fotos: string[] = [];
  // tslint:disable-next-line:no-inferrable-types
  desde: number = 1;
  // tslint:disable-next-line:no-inferrable-types
  totalRegistros!: number;
  // tslint:disable-next-line:no-inferrable-types
  public estado!: string ;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public articuloService: ArticulosService
  ) { }
  ngOnInit() {
    this.showArticulos();
    this.showArticulo();
   //this.armo();
  }

  showArticulos() {
    this.articuloService.showArticulos()
    .subscribe( res => {
      this.articulos = res;
      this.totalRegistros = res.length;
      console.log('paso Articulos');
    });
  }


  showArticulo() {
    this.articuloService.showArticulo(this.desde)
    .subscribe( res => {
      this.articulo = res;
      console.log('los aticulos',this.articulos);

      // this.fotos = res[0].foto.split(',');
      // console.log(this.fotos);
      // console.log(this.fotos.length);

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
    this.showArticulo();
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



