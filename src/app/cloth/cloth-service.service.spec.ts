import { TestBed } from '@angular/core/testing';

import { ClothServiceService } from './cloth-service.service';

describe('ClothServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClothServiceService = TestBed.get(ClothServiceService);
    expect(service).toBeTruthy();
  });
});
