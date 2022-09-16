import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing';

// Componenetes
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AstronomiaComponent } from './astronomia/astronomia.component';
import { AboutComponent } from './about/about.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { RadioastronomiaComponent } from './radioastronomia/radioastronomia.component';
import { MuseoComponent } from './museo/museo.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { EdicionComponent } from './edicion/edicion.component';
import { BlogCatComponent } from './blog-cat/blog-cat.component';
import { SidebarBlogComponent } from './sidebar-blog/sidebar-blog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    BlogComponent,
    AstronomiaComponent,
    AboutComponent,
    GaleriaComponent,
    RadioastronomiaComponent,
    MuseoComponent,
    ArticuloComponent,
    EdicionComponent,
    PagesComponent,
    BlogCatComponent,
    SidebarBlogComponent,
  ],
  exports:[
    DashboardComponent,
    HomeComponent,
    PagesComponent,
    // BlogComponent,
    // AstronomiaComponent,
    // AboutComponent,
    // GaleriaComponent,
    // RadioastronomiaComponent,
    // MuseoComponent,
     ArticuloComponent,
    // EdicionComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  //  PagesRoutingModule,
    SharedModule,
    //    BrowserModule,
  ],
  schemas: [  NO_ERRORS_SCHEMA  
  ]
})
export class PagesModule { }
