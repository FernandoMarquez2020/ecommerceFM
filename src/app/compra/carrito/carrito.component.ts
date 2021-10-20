import { ThisReceiver } from '@angular/compiler';
import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { OrdenAprobadaComponent } from '../orden-aprobada/orden-aprobada.component';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .card.disabled {
      opacity: 0.5;
    }
  `]




  
})
export class CarritoComponent implements OnInit {
  
  disabled = false;
  columnas = [
    '',
    'Nombre',
  'Cantidad',
  'Codigo',
  'Precio/u',
  ''
]
resumenList = [

  'Nombre',
'Cantidad',
'Codigo',
'Precio/u'

]
total : number = 0;
productos: string[] = []
cartProduct : any = []
cantidad : number=0
  modalService: any;
  
  constructor(private _productosService: ProductosService) { 
    
  }

  ngOnInit(): void {
    this.productos = Object.keys(sessionStorage);
    this.productos.forEach((el:any)  => {
      const item = sessionStorage.getItem(el);

      if (item != null) {
        let obj = JSON.parse(item);
        this.cartProduct.push(JSON.parse(item));
        this.total += obj.cantidad*obj.precio
      }

    });
  }
  change(event:any){
    console.log(event.target.value)
}

plus(productos:any){
  let temp = this.cartProduct.map((element: any)=>{
    if (element.id === productos.id){
      element.cantidad++;
      this.total += element.precio;
      return element
    }
    else{
      return element;
    }
  });
  this.cartProduct = temp;
}
less(productos:any){
  if(productos.cantidad === 1){
    let borrar = this.cartProduct.filter((element:any)=>{
      return element.id !== productos.id
    })
    this.total -=productos.precio
    this.cartProduct = borrar
  }
  else{
    let temp = this.cartProduct.map((element: any)=>{
    if (element.id === productos.id){
      element.cantidad--;
        this.total -= element.precio;
        return element;
    }
    else{
      return element;
    }
  });

  this.cartProduct = temp;
  }

}
aprobada() {
  const modalRef = this.modalService.open(OrdenAprobadaComponent);
  
}

finalizarCompra(){
  this.total = 0;
  this.cartProduct = [];
  this.productos.forEach((el:any)  => {
    sessionStorage.removeItem(el);
  });
  this.productos = [];
 

}
executeBoth() {
  // finalizarCompra();
  // aprobada();
}
deleteItem(productos: any){
    sessionStorage.removeItem("producto"+productos.id);
    const newItems = this.cartProduct.filter((item:any)=>{
      return item.id !== productos.id
    });
    this.cartProduct = newItems;

    this.total -= productos.cantidad*productos.precio;
}
isShown: boolean = false ; // hidden by default
continue: string= "continue"
cancelar: string= "cancelar"

toggleShow() {

this.isShown = ! this.isShown;
this.continue = this.cancelar;

}

}
