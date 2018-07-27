import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '@app/features/recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from './../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put(
      'https://ng-recipe-book-50277.firebaseio.com/recipes.json',
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    return this.http
      .get('https://ng-recipe-book-50277.firebaseio.com/recipes.json')
      .pipe(
        map((response: Response) => response.json()),
        map((recipe: Recipe) => {
          if (!recipe['ingredients']) {
            recipe.ingredients = [];
          }
          return recipe;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
