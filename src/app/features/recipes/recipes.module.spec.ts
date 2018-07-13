import { RecipesModule } from '@app/features/recipes/recipes.module';

describe('RecipesModule', () => {
  let recipesModule: RecipesModule;

  beforeEach(() => {
    recipesModule = new RecipesModule();
  });

  it('should create an instance', () => {
    expect(recipesModule).toBeTruthy();
  });
});
