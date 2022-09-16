import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { AstronomiaComponent } from './astronomia/astronomia.component';
import { RadioastronomiaComponent } from './radioastronomia/radioastronomia.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MuseoComponent } from './museo/museo.component';
import { BlogComponent } from './blog/blog.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { BlogCatComponent } from './blog-cat/blog-cat.component';
//import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  {path: 'dashboard',
    component: PagesComponent,
    children:[
      { path: '', component: DashboardComponent, data: {titulo: "Dashboard"}},
      { path: 'about', component: AboutComponent, data: {titulo: "About"}},
      { path: 'astronomia', component: AstronomiaComponent, data: {titulo: "Astronomia"}},
      { path: 'radioastronomia', component: RadioastronomiaComponent, data: {titulo: "Radioastronomia"}},
      { path: 'galeria', component: GaleriaComponent, data: {titulo: "Galeria"}},
      { path: 'museo', component: MuseoComponent, data: {titulo: "Museo"}},
      { path: 'blog', component: BlogComponent, data: {titulo: "Blog"}},
      { path: 'articulo', component: ArticuloComponent, data: {titulo: "Articulo"}},
      { path: 'articulo/:id', component: ArticuloComponent, data: {titulo: "Articulo"}},
//      { path: 'contacto', component: ContactoComponent, data: {titulo: "Contacto"}},
    ]
  },
];

@NgModule({
    imports: [ 
      RouterModule.forChild(routes)],
    exports: [ 
      RouterModule]
})
export class PagesRoutingModule {}
