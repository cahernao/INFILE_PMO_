import { TestBed } from '@angular/core/testing';

import { BackendService } from './backend.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BackendServiceService', () => {
  let service: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule ] });
    service = TestBed.inject(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('admin', () => {
    let data = {
      usuario: 'admin'
    }
    service.verDevolucionesAdmin(data).subscribe((res: any) => {
      expect(res).toBeTruthy();
    });
  });
});
