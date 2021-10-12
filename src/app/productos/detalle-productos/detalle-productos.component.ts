import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {
  productos: any;

  constructor(private _productosService: ProductosService) { }

  ngOnInit(): void {
    this._productosService.getProductos().subscribe((response: any) => {
     
      this.productos = response;
    });
  }

}
