import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ToastService } from 'src/app/componentes/toast.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-nueva-mercaderia',
  templateUrl: './nueva-mercaderia.component.html',
  styleUrls: ['./nueva-mercaderia.component.css']
})
export class NuevaMercaderiaComponent implements OnInit {

 
 
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
nombre_valid = "";
precio_valid = "";
categoria_valid = "";
marca_valid = "";
descripcion_valid= "";
stock_valid= "";
codigo_valid="";
imagenUrl_valid="";

id = 0;
showToast = "";
message = "";
  
  
  constructor(
    
    private _productosService:ProductosService,
    private toastService: ToastService,
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

  guardar(){
    if(this.isValid()){
      if(this.productos.id === 0){
        this._productosService.postProductos(this.productos).subscribe(response=>{
          this.cleanForm();
          this.toastService.show('El producto se inserto correctamente', { classname: 'bg-success text-light', delay: 5000 });
          this.activeModal.close(response)
        });
      }
      else{
        this._productosService.putProductos(this.productos).subscribe(response=>{
          this.cleanForm();
          this.toastService.show('El producto se modifico correctamente', { classname: 'bg-success text-light', delay: 5000 });
          this.activeModal.close(response)
        });
      }
      this.showToast = "show";
    }
    else{
      // error de servidor
    }
  }

 

  cleanForm(){
  this.productos = {
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
  }

  isValid(){
    let valid = true;
    if(this.productos.nombre.length === 0){
      this.nombre_valid = "is-invalid";
      valid = false;
    }
    if(this.productos.descripcion.length === 0){
      this.precio_valid = "is-invalid";
      valid = false;
    }
    if(this.productos.nombre.length === 0){
      this.nombre_valid = "is-invalid";
      valid = false;
    }
    if(this.productos.precio.length === 0){
      this.precio_valid = "is-invalid";
      valid = false;
    }

    return valid;
  }

  handleNombreInput(event:any){
    if(event.target.value.length > 0){
      this.nombre_valid = "is-valid";
    }
    else{
      this.nombre_valid = "is-invalid";
    }
  }
  handlePrecioInput(event:any){
    if(event.target.value.length > 0){
      this.precio_valid = "is-valid";
    }
    else{
      this.precio_valid = "is-invalid";
    }
  }
  handleDescripcionInput(event:any){
    if(event.target.value.length > 0){
      this.descripcion_valid = "is-valid";
    }
    else{
      this.descripcion_valid = "is-invalid";
    }
  }
  handleMarcaInput(event:any){
    if(event.target.value.length > 0){
      this.marca_valid = "is-valid";
    }
    else{
      this.marca_valid = "is-invalid";
    }
  }
  handleStockInput(event:any){
    if(event.target.value.length > 0){
      this.stock_valid = "is-valid";
    }
    else{
      this.stock_valid = "is-invalid";
    }
  }
  handleCodigoInput(event:any){
    if(event.target.value.length > 0){
      this.codigo_valid = "is-valid";
    }
    else{
      this.codigo_valid = "is-invalid";
    }
  }
  handleImagenInput(event:any){
    if(event.target.value.length > 0){
      this.imagenUrl_valid = "is-valid";
    }
    else{
      this.imagenUrl_valid = "is-invalid";
    }
  }
  handleCategoriaInput(event:any){
    if(event.target.value.length > 0){
      this.categoria_valid = "is-valid";
    }
    else{
      this.categoria_valid = "is-invalid";
    }
  }

  
  showSuccess(){
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 5000 });
  }


}
