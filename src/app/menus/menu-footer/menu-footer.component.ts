import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MapsComponent } from 'src/app/componentes/maps/maps.component';

@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.css']
})
export class MenuFooterComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {
    
  }

  open() {
    const modalRef = this.modalService.open(MapsComponent, { size: 'xl' });
    
  }}