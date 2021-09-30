import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaMercaderiaComponent } from './nueva-mercaderia.component';

describe('NuevaMercaderiaComponent', () => {
  let component: NuevaMercaderiaComponent;
  let fixture: ComponentFixture<NuevaMercaderiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaMercaderiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaMercaderiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
