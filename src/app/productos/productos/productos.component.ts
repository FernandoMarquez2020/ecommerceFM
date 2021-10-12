import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/servicios/productos.service';
import { DetalleProductosComponent } from '../detalle-productos/detalle-productos.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() productos:any;
  @Input() caller:any;
  constructor(private _productosService: ProductosService,private modalService: NgbModal ){ }
  

  ngOnInit(): void {
    console.log("!!!",this.productos);
  }

  openLg() {
    const modalRef = this.modalService.open(DetalleProductosComponent, { size: 'lg' });
    modalRef.result.then((item: any) => {
      this.productos.push(item)
    })}
}



