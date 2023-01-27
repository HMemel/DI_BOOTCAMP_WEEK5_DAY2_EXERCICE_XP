import { TestBed } from '@angular/core/testing';

import { ServiceWorkerServiceService } from './service-worker-service.service';

describe('ServiceWorkerServiceService', () => {
  let service: ServiceWorkerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWorkerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
