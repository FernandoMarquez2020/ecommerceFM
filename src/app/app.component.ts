import { Component } from '@angular/core';
import { MenuLateralComponent } from './menus/menu-lateral/menu-lateral.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { CarritoComponent } from './compra/carrito/carrito.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { CategoriasComponent } from './productos/categorias/categorias.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceFM';

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(CategoriasComponent, { size: 'xl' });
    
  }






}
