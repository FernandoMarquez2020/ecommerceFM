import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMercaderiaComponent } from './listado-mercaderia.component';

describe('ListadoMercaderiaComponent', () => {
  let component: ListadoMercaderiaComponent;
  let fixture: ComponentFixture<ListadoMercaderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMercaderiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMercaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
