import { Routes, RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
// Componenets
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  {    path:'login', component: LoginComponent},
  {    path:'register', component: RegisterComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
