import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/componentes/toast.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { DetalleProductosComponent } from '../detalle-productos/detalle-productos.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() productos:any;
  @Input() producto: any;
  @Input() caller:any;

  qty = 1;
  cartProduct ={
    cantidad:0,
    
    codigo:"",
    nombre:"",
    precio:0,
    imagenUrl:"",
    id:0
  }

  showToast = "";
message = "";
  constructor(private _productosService: ProductosService,private toastService: ToastService,private modalService: NgbModal ){ }
  

  ngOnInit(): void {
    console.log("!!!",this.productos);
  }


  openLg(producto: any) {
    const modalRef = this.modalService.open(DetalleProductosComponent, { size: 'lg' });
    
    modalRef.componentInstance.productos= producto;
    modalRef.result.then(item => {
      console.log(item);
      
    });
  }
  
  
    addCart(productos:any){
      this.cartProduct.id = productos.id;
      this.cartProduct.nombre = productos.nombre;
      this.cartProduct.codigo = productos.codigo;
      this.cartProduct.precio = productos.precio;
      this.cartProduct.imagenUrl = productos.imagenUrl;
      this.cartProduct.cantidad = this.qty;
      sessionStorage.setItem("producto"+productos.id,JSON.stringify(this.cartProduct));
      
      window.location.reload();

      this.toastService.show('El producto se agregó a su carrito', { classname: 'bg-warning text-light', delay: 5000 });

    }

    
  }



