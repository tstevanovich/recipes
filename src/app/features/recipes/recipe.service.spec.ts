import { inject, TestBed } from '@angular/core/testing';
import { RecipeService } from '@app/features/recipes/recipe.service';

describe('RecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeService]
    });
  });

  it('should be created', inject([RecipeService], (service: RecipeService) => {
    expect(service).toBeTruthy();
  }));
});
