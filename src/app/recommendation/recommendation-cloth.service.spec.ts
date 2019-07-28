import { TestBed } from '@angular/core/testing';

import { RecommendationClothService } from './recommendation-cloth.service';

describe('RecommendationClothService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommendationClothService = TestBed.get(RecommendationClothService);
    expect(service).toBeTruthy();
  });
});
