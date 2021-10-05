import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercaderiaService {

  url = "http://localhost:3000/productos";
  constructor(private _http: HttpClient) { }

  getProductos(){
    return this._http.get(this.url);
  }

  postProductos(bike:any){
    return this._http.post(this.url,bike);
  }

  deleteProductos(id:number){
    return this._http.delete(this.url+"/"+id);
  }

  putProductos(productos:any){
    return this._http.put(this.url+"/"+productos.id,productos);
  }

  getById(id:number){
    return this._http.get(this.url + "/" + id);
  }
}