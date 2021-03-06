import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './menus/menu-lateral/menu-lateral.component';
import { MenuFooterComponent } from './menus/menu-footer/menu-footer.component';
import { ListadoProductosComponent } from './productos/listado-productos/listado-productos.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListadoClientesComponent } from './abms/clientes/listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './abms/clientes/nuevo-cliente/nuevo-cliente.component';
import { ListadoMercaderiaComponent } from './abms/mercaderia/listado-mercaderia/listado-mercaderia.component';
import { NuevaMercaderiaComponent } from './abms/mercaderia/nueva-mercaderia/nueva-mercaderia.component';
import { CarritoComponent } from './compra/carrito/carrito.component';
import { FormularioCompraComponent } from './compra/formulario-compra/formulario-compra.component';
import { OrdenAprobadaComponent } from './compra/orden-aprobada/orden-aprobada.component';
import { CategoriasComponent } from './productos/categorias/categorias.component';
import { InicioComponent } from './menus/inicio/inicio.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MapsComponent } from './componentes/maps/maps.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './componentes/toast/toast.component';
import { DetalleProductosComponent } from './productos/detalle-productos/detalle-productos.component';
import { ContactoComponent } from './menus/contacto/contacto.component';
import { EmpresaComponent } from './menus/empresa/empresa.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth,} from '@angular/fire/auth';





@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    MenuFooterComponent,
    ListadoProductosComponent,
    ProductosComponent,
    NotFoundComponent,
    ListadoClientesComponent,
    NuevoClienteComponent,
    ListadoMercaderiaComponent,
    NuevaMercaderiaComponent,
    CarritoComponent,
    FormularioCompraComponent,
    OrdenAprobadaComponent,
    CategoriasComponent,
    InicioComponent,
    MapsComponent,
    ToastComponent,
    DetalleProductosComponent,
    ContactoComponent,
    EmpresaComponent,
    
    
    
    

  
    
    
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFireModule,
    // AngularFireAuthModule,
    
    
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
