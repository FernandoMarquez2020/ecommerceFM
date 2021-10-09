import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';


@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {


  productos: any;
  cd: any;
  constructor(private _productosService: ProductosService) { }
  

 
  producto:any;
  termino = "";
  backup:any;
  ngOnInit(): void {
    this._productosService.getProductos().subscribe((response: any) => {
      this.backup = response
      this.productos = response;
    });
      this.cd.detectChanges();
    
  } 
  filtrar(){
    let newProductos = this.backup.filter((producto:any) => {
      return producto.nombre.toLowerCase().includes(this.termino.toLowerCase()) === true
    });
    this.productos = newProductos;
  }

  // handlerInput(event){
  //   if(event.target.value.length === 0){
  //     this.productos = this.backup;
  //   }
  // }

}
