import { Component } from '@angular/core';
import { MenuLateralComponent } from './menus/menu-lateral/menu-lateral.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { CarritoComponent } from './compra/carrito/carrito.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { CategoriasComponent } from './productos/categorias/categorias.component';
import { ContactoComponent } from './menus/contacto/contacto.component';
import { UserService } from 'src/app/abms/clientes/usuarios/user.service';
import { TokenStorageService } from 'src/app/abms/clientes/usuarios/token-storage.service';


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


  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private modalService: NgbModal,private userService: UserService, private tokenStorageService: TokenStorageService) {}
  content?: string;
  ngOnInit(): void {
    this.productos = Object.keys(sessionStorage);
    this.productos.forEach((el:any)  => {
      const item = sessionStorage.getItem(el);

      if (item != null) {
        let obj = JSON.parse(item);
        this.cartProduct.push(JSON.parse(item));
        console.log("contador!!!!!!",this.cartProduct.length);

        
      }

    });
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      });


    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      

      this.username = user.username;};
  }

  contact() {
    const modalRef = this.modalService.open(ContactoComponent, { size: 'lg' });
    
  }






}
