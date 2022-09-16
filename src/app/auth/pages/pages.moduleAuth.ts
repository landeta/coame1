import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Modulos
import { PagesRoutingModule } from './pages.routing';



// Componenetes
import { PagesComponentAuth } from './pages.component';
//import { AddDocumentoComponent } from './add-documento/add-documento.component';
import { DeletDocumentoComponent } from './delet-documento/delet-documento.component';
import { ListDocumentoComponent } from './list-documento/list-documento.component';
import { ModDocumentoComponent } from './mod-documento/mod-documento.component';
import { ControlComponent } from './control/control.component';
import { BlogComponent } from './blog/blog.component';
import { EditComponent } from './edit/edit.component';




@NgModule({
  declarations: [
    //AddDocumentoComponent,
    DeletDocumentoComponent,
    ListDocumentoComponent,
    ModDocumentoComponent,
    ControlComponent,
    BlogComponent,
    EditComponent

    
  ],
  exports:[
    //AddDocumentoComponent,
    DeletDocumentoComponent,
    ListDocumentoComponent,
    ModDocumentoComponent,
    ControlComponent,
    BlogComponent,
    

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    

    
  ],
  schemas: [  NO_ERRORS_SCHEMA  
  ]
})
export class PagesModuleAuth { }
