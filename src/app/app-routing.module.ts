import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './compra/carrito/carrito.component';
import { InicioComponent } from './menus/inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { ProductosComponent } from './productos/productos/productos.component';

const routes: Routes = [

  
  {  
    path:"productos/productos",component:ProductosComponent
  },
  {  
    path:"compra/carrito",component:CarritoComponent
  },
  {
    path:"",component:InicioComponent
  },
  {  
    path:"**",component:NotFoundComponent
  },









];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true}),
            
  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
