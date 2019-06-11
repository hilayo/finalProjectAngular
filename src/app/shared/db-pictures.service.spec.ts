import { TestBed } from '@angular/core/testing';

import { DbPicturesService } from './db-pictures.service';

describe('DbPicturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbPicturesService = TestBed.get(DbPicturesService);
    expect(service).toBeTruthy();
  });
});
