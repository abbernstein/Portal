import { TestBed } from '@angular/core/testing';

import { SureServiceService } from './sure-service.service';

describe('SureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SureServiceService = TestBed.get(SureServiceService);
    expect(service).toBeTruthy();
  });
});
