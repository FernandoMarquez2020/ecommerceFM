import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoMercaderiaComponent } from './abms/mercaderia/listado-mercaderia/listado-mercaderia.component';
import { NuevaMercaderiaComponent } from './abms/mercaderia/nueva-mercaderia/nueva-mercaderia.component';
import { CarritoComponent } from './compra/carrito/carrito.component';
import { OrdenAprobadaComponent } from './compra/orden-aprobada/orden-aprobada.component';
import { EmpresaComponent } from './menus/empresa/empresa.component';
import { InicioComponent } from './menus/inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriasComponent } from './productos/categorias/categorias.component';
import { DetalleProductosComponent } from './productos/detalle-productos/detalle-productos.component';
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
    path:"compra/orden-aprobada",component:OrdenAprobadaComponent
  },
  {  
    path:"productos/categorias",component:CategoriasComponent
  },
  {  
    path:"mercaderia",component:ListadoMercaderiaComponent
  },
  {  
    path:"empresa",component:EmpresaComponent
  },
  {  
    path:"nueva-mercaderia",component:NuevaMercaderiaComponent
  },
  {  
    path:"detalle",component:DetalleProductosComponent
  },
 

  {
    path:"",component:InicioComponent
  },

  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },

  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
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
