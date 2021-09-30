import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenAprobadaComponent } from './orden-aprobada.component';

describe('OrdenAprobadaComponent', () => {
  let component: OrdenAprobadaComponent;
  let fixture: ComponentFixture<OrdenAprobadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenAprobadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenAprobadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
