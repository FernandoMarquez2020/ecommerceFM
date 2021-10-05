import { TestBed } from '@angular/core/testing';

import { MercaderiaService } from './mercaderia.service';

describe('MercaderiaService', () => {
  let service: MercaderiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercaderiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
