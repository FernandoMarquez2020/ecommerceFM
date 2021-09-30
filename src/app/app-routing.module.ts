import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';

const routes: Routes = [

  {
    path:"",component:ListadoProductosComponent
  },
  {  
    path:"**",component:NotFoundComponent
  }










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
