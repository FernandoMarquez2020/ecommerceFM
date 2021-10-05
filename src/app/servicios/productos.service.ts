import { Injectable, Input } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  @Input() productos:any;
  @Input() caller:any;
  constructor() { }
}


