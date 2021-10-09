import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMercaderiaComponent } from './abms/mercaderia/listado-mercaderia/listado-mercaderia.component';
import { CarritoComponent } from './compra/carrito/carrito.component';
import { InicioComponent } from './menus/inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriasComponent } from './productos/categorias/categorias.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { ProductosComponent } from './productos/productos/productos.component';

const routes: Routes = [

  {
    path:"productos/listado-productos",component:ListadoProductosComponent
  },
  {  
    path:"productos/productos",component:ProductosComponent
  },
  {  
    path:"compra/carrito",component:CarritoComponent
  },
  {  
    path:"productos/categorias",component:CategoriasComponent
  },
  {  
    path:"mercaderia",component:ListadoMercaderiaComponent
  },

  {
    path:"",component:InicioComponent
  },
  {  
    path:"**",component:NotFoundComponent
  },









];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            
  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
