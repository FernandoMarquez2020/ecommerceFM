import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listado-mercaderia',
  templateUrl: './listado-mercaderia.component.html',
  styleUrls: ['./listado-mercaderia.component.css']
})
export class ListadoMercaderiaComponent implements OnInit {
  cd: any;
  

  constructor(private _productosService:ProductosService) {}

  productos:any;
  termino = "";
  backup:any;
  ngOnInit(): void {
    this._productosService.getProductos().subscribe(data => {
      this.productos = data;
      this.cd.detectChanges();
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

      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
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
    let newProductos = this.productos.filter((productos: { nombre: string; }) => {
      return productos.nombre.toLowerCase().includes(this.termino.toLowerCase()) === true
    });
    this.productos = newProductos;
  }

  handlerInput(event: { target: { value: string | any[]; }; }){
    if(event.target.value.length === 0){
      this.productos = this.backup;
    }
  }
}



