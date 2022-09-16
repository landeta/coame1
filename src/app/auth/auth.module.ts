import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesModuleAuth } from './pages/pages.moduleAuth';
import { AppModule } from '../app.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListDocumentoComponent } from './pages/list-documento/list-documento.component';
import { DeletDocumentoComponent } from './pages/delet-documento/delet-documento.component';
import { ModDocumentoComponent } from './pages/mod-documento/mod-documento.component';
import { PagesComponentAuth } from './pages/pages.component';
import { AddDocumentoComponent } from './pages/add-documento/add-documento.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PagesComponentAuth,
    AddDocumentoComponent,
    //AddDocumentoComponent,
    //ListDocumentoComponent,
    //DeletDocumentoComponent,
    //ModDocumentoComponent,
    

  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    PagesModuleAuth,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PagesModuleAuth,
     ],
  providers: [
  ],
})
export class AuthModule { }
