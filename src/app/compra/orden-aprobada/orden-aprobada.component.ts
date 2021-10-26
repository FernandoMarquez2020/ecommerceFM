import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orden-aprobada',
  templateUrl: './orden-aprobada.component.html',
  styleUrls: ['./orden-aprobada.component.css']
})
export class OrdenAprobadaComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  volver(){
    
    // window.location.reload();
  
  }


}


