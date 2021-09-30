import { Component } from '@angular/core';
import { MenuLateralComponent } from './menus/menu-lateral/menu-lateral.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceFM';

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(MenuLateralComponent, { size: 'xl' });
    
  }






}
