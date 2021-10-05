import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() productos:any;
  @Input() caller:any;
  constructor() { }
  

  ngOnInit(): void {
    console.log("!!!",this.productos);
  }

}



