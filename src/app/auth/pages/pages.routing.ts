import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Componenets
import { AddDocumentoComponent } from './add-documento/add-documento.component';
import { ListDocumentoComponent } from './list-documento/list-documento.component';
import { DeletDocumentoComponent } from './delet-documento/delet-documento.component';
import { EditComponent } from './edit/edit.component';
import { ModDocumentoComponent } from './mod-documento/mod-documento.component';
import { PagesComponentAuth } from './pages.component';
import { ControlComponent } from './control/control.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path: 'control',
    component: PagesComponentAuth,
    children:[
      { path: '', component: ControlComponent, data: {titulo: "Control"}},
      { path: 'addarticulo', component: AddDocumentoComponent, data: {titulo: "Add Articulo"}},
      { path: 'listararticulo', component: ListDocumentoComponent, data: {titulo: "Listar Articulo"}},
      { path: 'addblog', component: BlogComponent, data: {titulo: "Add Blog"}},
      { path: 'listblog', component: ListDocumentoComponent, data: {titulo: "Listar Blog"}},
      { path: 'mod', component: ModDocumentoComponent, data: {titulo: "Modifi"}},
      { path: 'delet/:id', component: DeletDocumentoComponent, data: {titulo: ""}},
      { path: 'edit/:id', component:EditComponent},
    ]
  },
];
@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule]
})
export class PagesRoutingModule {}
