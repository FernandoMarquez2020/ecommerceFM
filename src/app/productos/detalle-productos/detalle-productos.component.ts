import { Component, OnInit,NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {
  productos = {
    "id": 0,
"codigo": "",
"nombre": "",
"descripcion": "",
"precio": "",
"disponible": true,
"oferta": true,
"marca": "",
"categoria": "",
"imagenUrl": "",
"stock": ""
};
id = 0;

  constructor(
    private _productosService:ProductosService,
    private route: ActivatedRoute,
    private _router: Router,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(response=>{
      if(response.id !== undefined){
        this.id = response.id;
        this._productosService.getById(this.id).subscribe(response=>{
          this.productos = JSON.parse(JSON.stringify(response));
          
        })
      }
    
    });
  }

}
