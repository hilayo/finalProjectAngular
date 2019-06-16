import { TestBed } from '@angular/core/testing';

import { ImageProccessingService } from './image-proccessing.service';

describe('ImageProccessingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageProccessingService = TestBed.get(ImageProccessingService);
    expect(service).toBeTruthy();
  });
});
