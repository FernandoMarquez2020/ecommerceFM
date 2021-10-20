import { Component } from '@angular/core';
import { MenuLateralComponent } from './menus/menu-lateral/menu-lateral.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { CarritoComponent } from './compra/carrito/carrito.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { CategoriasComponent } from './productos/categorias/categorias.component';
import { ContactoComponent } from './menus/contacto/contacto.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceFM';
  total : number = 0;
  productos: string[] = []
  cartProduct : any = []
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    this.productos = Object.keys(sessionStorage);
    this.productos.forEach((el:any)  => {
      const item = sessionStorage.getItem(el);

      if (item != null) {
        let obj = JSON.parse(item);
        this.cartProduct.push(JSON.parse(item));
        
      }

    });
  }

  contact() {
    const modalRef = this.modalService.open(ContactoComponent, { size: 'lg' });
    
  }






}
