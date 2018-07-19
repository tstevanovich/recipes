import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '@app/shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simplay a test',
      'https://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--1284490_9.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simplay another test',
      'http://visualrecipes.com/images/uploads/recipe_images/411_image1.JPG'
    )
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}
