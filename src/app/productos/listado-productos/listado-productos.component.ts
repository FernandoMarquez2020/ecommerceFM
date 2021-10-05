import { Component, OnInit } from '@angular/core';
import { MercaderiaService } from './mercaderia.service';


@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {


  mercaderias: any;
  constructor(private _productosService: MercaderiaService) { }
  

  ngOnInit(): void {
    
    this._productosService.getProductos().subscribe((response: any) => {
      this.mercaderias = response;
    });
  }

}
