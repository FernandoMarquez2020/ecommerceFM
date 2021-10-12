import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2';
import { NuevaMercaderiaComponent } from '../nueva-mercaderia/nueva-mercaderia.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listado-mercaderia',
  templateUrl: './listado-mercaderia.component.html',
  styleUrls: ['./listado-mercaderia.component.css']
})
export class ListadoMercaderiaComponent implements OnInit {
  cd: any;
  @Input() producto: any;
  nuevo: any;

  constructor(private _productosService:ProductosService,private modalService: NgbModal) {}
  
  productos:any;
  termino = "";
  backup:any;
  ngOnInit(): void {
    this._productosService.getProductos().subscribe((data: any) => {
      this.productos = data;
      this.backup = this.productos;
    });
    
  }
  eliminarProducto(id: number){

    Swal.fire({
      title: 'Estas seguro?',
      text: 'Estas a punto de eliminar un producto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this._productosService.deleteProductos(id).subscribe(response=>{
          let newProductos = this.productos.filter((item: { id: any; }) =>{
            return item.id !== id
          });
          this.productos = newProductos;
          Swal.fire(
            'Eliminado!',
            'El producto ha sido eliminado.',
            'success'
          );
        });

   
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El producto no sera eliminado :)',
          'error'
        )
      }
    })
  }

  filtrar(){
    let newProductos = this.backup.filter((producto:any) => {
      return producto.nombre.toLowerCase().includes(this.termino.toLowerCase()) === true
    });
    this.productos = newProductos;
  }

  // handlerInput(event: { target: { value: string | any[]; }; }){
  //   if(event.target.value.length === 0){
  //     this.productos = this.backup;
  //   }
  // }


openLg() {
  const modalRef = this.modalService.open(NuevaMercaderiaComponent, { size: 'lg' });
  modalRef.result.then((item: any) => {
    this.productos.push(item)
  })
   

}
open2(producto: any) {
  const modalRef = this.modalService.open(NuevaMercaderiaComponent, { size: 'lg' });
  
  modalRef.componentInstance.productos= producto;
  modalRef.result.then(item => {
    console.log(item);
    
  })
}

}
